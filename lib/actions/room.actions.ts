'use server'
import { nanoid } from 'nanoid'
import { liveblocks } from '../liveblocks';
import { revalidatePath } from 'next/cache';
import { parseStringify } from '../utils';

//CREATING A DOCUMENT
export const createDocument = async ({ userId, email }: CreateDocumentParams) => {
    const roomId = nanoid();

    try {
        //Creation of a room

        //setting the metadata
        const metadata = {
            creatorId: userId,
            email,
            title: 'Untitled'
        }

        //Level of access we have
        const usersAccesses: RoomAccesses = {
            [email]: ['room:write']
        }

        //Room Creation
        const room = await liveblocks.createRoom(roomId, {
            metadata,
            usersAccesses,
            defaultAccesses: ['room:write']
        });

        revalidatePath('/');
        return parseStringify(room);

    } catch (error) {
        console.log('Error happened while creating a room :', error)
    }
}


//GETTING A DOCUMENT
export const getDocument = async ({ roomId, userId }: { roomId: string, userId: string }) => {
    try {
        const room = await liveblocks.getRoom(roomId);

        // const hasAccess = Object.keys(room.usersAccesses).includes(userId);
        // if (!hasAccess) {
        //     throw new Error('you do not have access to this document');
        // }
        return parseStringify(room);
    } catch (error) {
        console.log('error happened while getting a room', error)
    }

}


//GETTING ALL DOCUMENT
export const getAllDocuments = async (email: string) => {
    try {
        const rooms = await liveblocks.getRooms({ userId: email })
        return parseStringify(rooms);

    } catch (error) {
        console.log('error happened while getting all rooms', error)
    }

}


//UPDATING A DOCUMENT
export const updateDocument = async (roomId: string, title: string) => {
    try {
        const updatedRoom = await liveblocks.updateRoom(roomId, {
            metadata: {
                title
            }
        })

        revalidatePath(`/documents/${roomId}`);

        return parseStringify(updatedRoom);

    } catch (error) {
        console.log('error happened while updating a room', error)
    }

}