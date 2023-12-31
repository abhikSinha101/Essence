import MessageButton from "@/components/messenger/MessageButton";
import CampaignsTab from "@/components/shared/CampaignsTab";
import ProfileHeader from "@/components/shared/ProfileHeader";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { profileTabs } from "@/constants";
import { fetchChatId, generateChatId } from "@/lib/actions/chat.action";
import { fetchUser } from "@/lib/actions/user.actions";
import { UserButton, currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: { id: string } }) => {
  const user = await currentUser();

  if (!user) return null;
  const userInfo = await fetchUser(params.id);
  const myUser = await fetchUser(user.id);

  if (!userInfo?.onBoarded) redirect("/onboarding");

  const chatId = await generateChatId(myUser._id, userInfo._id);
  console.log(myUser.id, userInfo.id);

  return (
    <section className="w-full text-base-regular">
      <ProfileHeader
        accountId={userInfo.id}
        authUserId={user.id}
        name={userInfo.name}
        username={userInfo.username}
        imgUrl={userInfo.image}
        bio={userInfo.bio}
      />
      <div className="flex flex-row justify-between items-center mt-2">
        <MessageButton chatId={chatId} />
        <UserButton />
      </div>

      <div className="mt-9">
        <Tabs defaultValue="campaigns" className="w-full">
          <TabsList className="tab bg-light-2">
            {profileTabs.map((tab) => (
              <TabsTrigger key={tab.label} value={tab.value} className="tab">
                <Image
                  src={tab.icon}
                  alt={tab.label}
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="max-sm:hidden">{tab.label}</p>
                {tab.label === "Campaigns" && (
                  <p className="ml-1 rounded-sm bg-dark-3 px-2 py-1 !text-tiny-medium text-light-2">
                    {userInfo?.campaigns?.length}
                  </p>
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          {profileTabs.map((tab) => (
            <TabsContent
              key={`content-${tab.label}`}
              value={tab.value}
              className="w-full text-light-2"
            >
              <CampaignsTab
                currentUserId={user.id}
                accountId={userInfo.id}
                accountType="User"
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Page;
