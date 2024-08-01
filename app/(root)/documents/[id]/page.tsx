import Collaborativeroom from "@/components/shared/CollaborativeRoom";
import { getDocument } from "@/lib/actions/room.actions";
import { getClerkUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
// Define the Documents component
const Documents = async ({ params: { id } }: SearchParamProps) => {




  // Fetch the current authenticated user from Clerk
  const clerkUser = await currentUser();
  // If no user is authenticated, redirect to the sign-in page
  if (!clerkUser) {
    return null;
  }


  // Retrieve the document (room) details using the room ID and the user's email address
  const room = await getDocument({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress
  });

  // If the room does not exist or is not accessible, redirect to the home page
  if (!room) redirect('/');

  // Extract user IDs from the room's user access data
  const userIds = Object.keys(room.usersAccesses);

  // Fetch user details from Clerk using the extracted user IDs
  const users = await getClerkUsers({ userIds });

  // Map the fetched users to include their user type (editor or viewer) based on access permissions
  const usersData = users.map((user: User) => ({
    ...user,
    userType: room.usersAccesses[user.email]?.includes('room:write')
      ? 'editor'
      : 'viewer'
  }));

  // Determine the current user's type (editor or viewer) based on their access permissions
  const currentUserType = room.usersAccesses[clerkUser.emailAddresses[0].emailAddress]?.includes('room:write')
    ? 'editor'
    : 'viewer';

  return (
    <main className="flex w-full flex-col items-center">
      {/* Render the CollaborativeRoom component with the room details and user data */}
      <Collaborativeroom
        roomId={id}
        roomMetadata={room.metadata}
        users={usersData}
        currentUserType={currentUserType}
      />
    </main>
  );
}

export default Documents;
