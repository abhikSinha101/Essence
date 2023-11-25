import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

import {
  fetchUser,
  fetchUsers,
  getNotification,
} from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

function NotificationCard() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}

export default NotificationCard;

/**
 * 
 * 
 const user = await currentUser();

  if (!user) return null;
  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onBoarded) redirect("/onboarding");

  //getNotification
  const notification = await getNotification(userInfo._id); 


{notification && notification.length > 0 ? (
          <>
            {notification.map((notification) => {
              <Link
                key={notification._id}
                href={`/main/campaigns/${notification.parentId}`}
              >
                <article className="activity-card">
                  <Image
                    src={notification.author.image}
                    alt="profile image"
                    width={20}
                    height={20}
                    className="rounded-full object-cover"
                  />
                </article>
              </Link>;
            })}
          </>
        ) : (
          <>
            <p>No Notification</p>
          </>
        )} */
