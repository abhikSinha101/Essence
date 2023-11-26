import { currentUser } from "@clerk/nextjs";
import { fetchUser, getNotification } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function handler() {
  try {
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(user.id);

    if (!userInfo?.onBoarded) redirect("/onboarding");
    const notification = await getNotification(userInfo._id);
  } catch (error: any) {
    throw new Error(`Error fetching user ${error.message}`);
  }
}
