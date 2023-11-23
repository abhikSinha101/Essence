import AccountProfile from "@/components/forms/AccountProfile";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Page() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect("/");

  const userData = {
    id: user.id,
    objectId: String(userInfo?._id),
    username: String(userInfo ? userInfo?.username : user.username),
    name: String(userInfo ? userInfo?.name : user.firstName ?? ""),
    bio: String(userInfo ? userInfo?.bio : ""),
    image: String(userInfo ? userInfo?.image : user.imageUrl),
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">OnBoardings</h1>
      <p className="mt-3 text-base-regular text-dark-1">
        Complete your profile to start using Essence.
      </p>
      <section className="mt-9 bg-light-1 border border-light-3 rounded-2xl p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
}
export default Page;
