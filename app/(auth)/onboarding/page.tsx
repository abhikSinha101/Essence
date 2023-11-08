import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";

async function Page() {
  const user = await currentUser();

  const userInfo = {};

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    userName: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
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
