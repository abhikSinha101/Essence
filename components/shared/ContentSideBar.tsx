import { inter } from "@/app/fonts/fonts";

import {
  SignOutButton,
  SignedIn,
  UserButton,
  currentUser,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContentSideBarMenu from "./ContentSideBarMenu";
import DirectMessageCard from "../cards/DirectMessageCard";
import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

async function ContentSideBar() {
  const user = await currentUser();

  if (!user) return null;
  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onBoarded) redirect("/onboarding");

  //fetch users
  const result = await fetchUsers({
    userId: user.id,
    searchString: "",
    pageNumber: 1,
    pageSize: 25,
  });

  return (
    <section className="contentsidebar custom-scrollbar p-4">
      <ContentSideBarMenu />

      <div className="flex flex-col gap-1">
        {result.users.length === 0 ? (
          <p className="no-result">No User</p>
        ) : (
          <>
            {result.users.map((person) => (
              <DirectMessageCard
                key={person.id}
                id={person._id}
                name={person.name}
                username={person.username}
                imgUrl={person.image}
                personType="User"
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
}

export default ContentSideBar;
