import CampaignCard from "@/components/cards/CampaignCard";
import UserCard from "@/components/cards/UserCard";
import Comment from "@/components/forms/Comment";
import {
  fetchCampaign,
  fetchCampaignById,
} from "@/lib/actions/campaign.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: { id: string } }) => {
  if (!params.id) return null;

  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onBoarded) redirect("/onboarding");

  const campaign_info = await fetchCampaignById(params.id);

  return (
    <section className="relative">
      <div>
        <CampaignCard
          key={campaign_info._id}
          id={campaign_info._id}
          currentUserId={user?.id || ""}
          parentId={campaign_info.parentId}
          content={campaign_info.text}
          author={campaign_info.author}
          teams={campaign_info.teams}
          createdAt={campaign_info.createdAt}
          comments={campaign_info.children}
        />
      </div>

      <div className="mt-8">
        <Comment
          campaignId={campaign_info.id}
          currentUserImage={userInfo.image}
          currentUserId={JSON.stringify(userInfo._id)}
        />
      </div>

      <div className="mt-8">
        {campaign_info.children.map((childItem: any) => (
          <CampaignCard
            key={childItem._id}
            id={childItem._id}
            currentUserId={user?.id || ""}
            parentId={childItem.parentId}
            content={childItem.text}
            author={childItem.author}
            teams={childItem.teams}
            createdAt={childItem.createdAt}
            comments={childItem.children}
            isComment
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
