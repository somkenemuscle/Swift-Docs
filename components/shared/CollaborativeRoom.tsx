"use client" // Indicates that this component is client-side only

import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense"
import { Editor } from "@/components/editor/Editor"
import Header from "@/components/shared/header"
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import Activecollaborators from "../shared/Activecollaborators"
import { useState, useRef, useEffect } from "react"
import { Input } from "../ui/input"
import Image from "next/image"
import { updateDocument } from "@/lib/actions/room.actions"
import Loader from "../shared/Loader"
import ShareModal from "../shared/ShareModal"



const Collaborativeroom = ({ roomId, roomMetadata, users, currentUserType }: CollaborativeRoomProps) => {

    // STATE VARIABLES
    // `editing` controls whether the user is editing the document title
    const [editing, setEditing] = useState(false);

    // `loading` indicates if a save operation is in progress
    const [loading, setLoading] = useState(false);

    // `documentTitle` holds the current title of the document
    const [documentTitle, setdocumentTitle] = useState(roomMetadata.title);

    // REFS TO ELEMENTS
    // `containerRef` is used to reference the container div for handling clicks outside
    const containerRef = useRef<HTMLDivElement>(null);

    // `inputRef` is used to reference the input element
    const inputRef = useRef<HTMLInputElement>(null);

    // Function to handle keyboard events in the input field
    const updateTitleHandler = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setLoading(true); // Set loading state to true when the user presses Enter

            try {
                // Check if the document title has changed before updating
                if (documentTitle !== roomMetadata.title) {
                    // Call the function to update the document with the new title
                    const updatedDocument = await updateDocument(
                        roomId, // Pass the roomId to identify the document
                        documentTitle // Pass the new title
                    );

                    // Set loading state to false when the update is done
                    if (updatedDocument) {
                        setLoading(false);
                    }
                }
            } catch (error) {
                // Log any errors that occur during the update
                console.log(error);
            }
        }
    }


    // Effect to focus the input field when editing starts
    useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editing]); // Runs when the `editing` state changes


    // Effect to handle clicks outside the container to exit editing mode
    useEffect(() => {
        const handleClickOutside = (e: Event) => {
            // Check if the click was outside the container
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setEditing(false); // Exit editing mode if clicking outside

                // Update the document if the title has changed
                updateDocument(roomId, documentTitle);
            }
        };

        // Add event listener for 'mousedown' events to detect clicks
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [roomId, documentTitle]); // Runs when `roomId` or `documentTitle` changes


    return (
        <RoomProvider id={roomId}>
            <ClientSideSuspense fallback={<div><Loader /></div>}>

                <div className="collaborative-room">
                    <Header >
                        {/* Main container for the room header */}
                        <div ref={containerRef} className="flex w-fit items-center justify-center gap-2">

                            {/* Conditionally render input field if editing is true and loading is false */}
                            {editing && !loading ? (
                                <Input
                                    type='text'
                                    value={documentTitle}
                                    ref={inputRef}
                                    placeholder="Enter title"
                                    onChange={(e) => setdocumentTitle(e.target.value)}
                                    onKeyDown={updateTitleHandler}
                                    disabled={!editing} // Disable input if not editing
                                    className="document-title-input"
                                />
                            ) : (
                                // Render the document title if not editing
                                <p className="document-title">{documentTitle}</p>
                            )}

                            {/* Render the edit icon if the user is an editor and not currently editing */}
                            {currentUserType === 'editor' && !editing && (
                                <Image
                                    src='/assets/icons/edit.svg'
                                    alt="edit"
                                    width={24}
                                    height={24}
                                    onClick={() => setEditing(true)} // Set editing to true on click
                                    className="pointer"
                                />
                            )}

                            {/* Render 'View Only' tag if the user is not an editor and not editing */}
                            {currentUserType !== 'editor' && !editing && (
                                <p className="view-only-tag">View Only</p>
                            )}

                            {/* Render loading message if a save operation is in progress */}
                            {loading && <p className="text-sm text-gray-400">Saving ...</p>}

                        </div>

                        {/* Render additional components in the header */}
                        <div className="flex w-full flex-1 justify-end sm:gap-3">
                            <Activecollaborators />
                            <ShareModal
                                roomId={roomId}
                                collaborators={users}
                                creatorId={roomMetadata.creatorId}
                                currentUserType={currentUserType}
                            />
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </Header>
                    <Editor
                        roomId={roomId}
                        currentUserType={currentUserType}
                    />
                </div>
            </ClientSideSuspense>
        </RoomProvider>
    )
}

export default Collaborativeroom
