import { fetchUserPost } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import CampaignCard from "../cards/CampaignCard";

interface Props {
  currentUserId: string;
  accountId: string;
  accountType: string;
}

const CampaignsTab = async ({
  currentUserId,
  accountId,
  accountType,
}: Props) => {
  let result = await fetchUserPost(accountId);

  if (!result) redirect("/main");

  return (
    <section className="mt-9 flex flex-col gap-10">
      {result.campaigns.map((campaign: any) => (
        <CampaignCard
          key={campaign._id}
          id={campaign._id}
          currentUserId={currentUserId}
          parentId={campaign.parentId}
          content={campaign.text}
          author={
            accountType === "User"
              ? { name: result.name, image: result.image, id: result.id }
              : {
                  name: campaign.author.name,
                  image: campaign.author.image,
                  id: campaign.author.id,
                }
          }
          teams={campaign.teams} //todo
          createdAt={campaign.createdAt}
          comments={campaign.children}
        />
      ))}
    </section>
  );
};

export default CampaignsTab;
