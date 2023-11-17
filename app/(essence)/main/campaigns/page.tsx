import Campaigns from "@/components/forms/Campaigns";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Page() {
  const user = await currentUser();

  if (!user) return null;
  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onBoarded) redirect("/onboarding");

  return (
    <>
      <h1>Campaigns</h1>
      <Campaigns userId={userInfo._id} />
    </>
  );
}

export default Page;
