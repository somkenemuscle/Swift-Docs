import Collaborativeroom from "@/components/CollaborativeRoom"
import { getDocument } from "@/lib/actions/room.actions";
import { getClerkUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

const Documents = async ({ params: { id } }: SearchParamProps) => {

  const clerkUser = await currentUser();

  if (!clerkUser) {
    redirect('/sign-in')
  }

  const room = await getDocument({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress
  });

  if (!room) redirect('/');

  const userIds = Object.keys(room.usersAccesses);
  const users = await getClerkUsers({ userIds });
  const usersData = users.map(() => ({
    ...userIds,

  }))

  return (
    <main className="flex w-full flex-col items-center">
      <Collaborativeroom
        roomId={id}
        roomMetadata={room.metadata}
      />
    </main>
  )
}

export default Documents