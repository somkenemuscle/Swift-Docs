import Header from "@/components/shared/header"
import { SignedIn, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import AddDocumentBtn from "@/components/shared/AddDocumentBtn"
import { currentUser } from "@clerk/nextjs/server"
import { getAllDocuments } from "@/lib/actions/room.actions"
import Link from "next/link"
import { dateConverter } from "@/lib/utils"
import { DeleteModal } from "@/components/shared/DeleteModal"
import Notifications from "@/components/shared/Notifications"


const Documents = async () => {

  // Fetch the current signed-in user from Clerk
  const clerkUser = await currentUser();

  // If no user is signed in, redirect them to the sign-in page
  if (!clerkUser) {
    return null;
  }

  // Fetch all documents associated with the current user's email address
  const roomDocuments = await getAllDocuments(clerkUser.emailAddresses[0].emailAddress);

  return (
    <main className="home-container">
      {/* Render the page header */}
      <Header className='lg:ml-72 sticky left-0 top-0'>
        <div className="lg:mx-72 flex items-center gap-2 lg:gap-4">
          {/* Placeholder for notification */}
          <Notifications />
          {/* Render the user button if the user is signed in */}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>

      {/* Check if there are any documents to display */}
      {roomDocuments && roomDocuments.data && roomDocuments.data.length > 0 ? (
        <div className="document-list-container">
          {/* Render the section title and the button to add new documents */}
          <div className="document-list-title">
            <h3 className="text-28-semibold">All Documents</h3>
            <AddDocumentBtn
              userId={clerkUser.id} // Pass user ID to the AddDocumentBtn component
              email={clerkUser.emailAddresses[0].emailAddress} // Pass user email to the AddDocumentBtn component
            />
          </div>

          {/* Render a list of documents */}
          <ul className="document-ul">
            {roomDocuments.data.map(({ id, metadata, createdAt }: any) => (
              <li key={id} className="document-list-item">
                {/* Link to document detail page */}
                <Link href={`/documents/${id}`} className="flex flex-1 items-center gap-4">
                  <div className="hidden rounded-md bg-stone-50 p-2 sm:block">
                    {/* Display document icon */}
                    <Image
                      src="/assets/icons/doc.svg"
                      alt="file"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="space-y-1">
                    {/* Display document title */}
                    <p className="line-clamp-1 font-bold text-lg">{metadata.title}</p>
                    {/* Display document creation date */}
                    <p className="text-sm font-normal text-gray-700">Created about {dateConverter(createdAt)}</p>
                  </div>
                </Link>

                <DeleteModal roomId={id} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="document-list-empty bg-white">  {/* Render when there are no documents */}
          {/* Display an icon indicating no documents */}
          <Image
            src='/assets/icons/doc.svg'
            alt="Document"
            width={40}
            height={40}
            className="mx-auto"
          />

          {/* Render the button to add new documents */}
          <AddDocumentBtn
            userId={clerkUser.id} // Pass user ID to the AddDocumentBtn component
            email={clerkUser.emailAddresses[0].emailAddress} // Pass user email to the AddDocumentBtn component
          />

        </div>
      )}
    </main>
  )
}

export default Documents