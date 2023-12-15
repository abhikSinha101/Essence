import MessageUser from "@/components/cards/MessageUser";
import { fetchChatViaUserId } from "@/lib/actions/chat.action";
import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await currentUser();

  if (!user) return null;
  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onBoarded) redirect("/onboarding");

  //fetch users execpt my user
  const result = await fetchUsers({
    userId: user.id,
    searchString: "",
    pageNumber: 1,
    pageSize: 25,
  });

  const chatData = await Promise.all(
    result.users.map(async (person) => {
      const chat = await fetchChatViaUserId(userInfo._id, person._id);
      return {
        person,
        chat,
      };
    })
  );

  return (
    <section className="flex flex-col h-full">
      <div className="flex flex-col items-center text-center max-md:hidden">
        Start a conversation.
      </div>
      <div className="hidden  max-md:flex flex-col items-center text-center mt-2">
        <p className="text-black my-2">Message your friends.</p>
        {result.users.length === 0 ? (
          <p className="text-dark-3">No User</p>
        ) : (
          <>
            {chatData.map(({ person, chat }) =>
              chat ? (
                <MessageUser
                  key={person.id}
                  chatId={chat._id}
                  name={person.name}
                  imgUrl={person.image}
                />
              ) : null
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Page;
