import {
  fetchUser,
  fetchUsers,
  getNotification,
} from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function fetchData() {
  const user = await currentUser();

  if (!user) return null;
  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onBoarded) redirect("/onboarding");

  //getNotification
  const notification = await getNotification(userInfo._id);

  return notification;
}
