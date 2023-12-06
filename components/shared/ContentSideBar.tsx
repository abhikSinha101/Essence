import { inter } from "@/app/fonts/fonts";

import { currentUser } from "@clerk/nextjs";

import ContentSideBarMenu from "./ContentSideBarMenu";
import DirectMessageCard from "../cards/DirectMessageCard";
import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import {
  fetchChatId,
  fetchChatViaUserId,
  fetchChats,
} from "@/lib/actions/chat.action";

async function ContentSideBar() {
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

  const personIds = result.users.map((person) => person._id);

  //tests
  for (const personId of personIds) {
    const chat = await fetchChatViaUserId(userInfo._id, personId);

    console.log(`Chat found with personId: ${personId}, chatId: ${chat._id}`);
  }

  return (
    <section className="contentsidebar custom-scrollbar p-4">
      <ContentSideBarMenu />

      <div className="flex flex-col gap-1">
        {result.users.length === 0 ? (
          <p className="no-result">No User</p>
        ) : (
          <>
            {result.users.map(async (person) => {
              const chat = await fetchChatViaUserId(userInfo._id, person._id);
              return (
                <DirectMessageCard
                  key={person.id}
                  chatId={chat._id}
                  name={person.name}
                  imgUrl={person.image}
                />
              );
            })}
          </>
        )}
      </div>
    </section>
  );
}

export default ContentSideBar;
