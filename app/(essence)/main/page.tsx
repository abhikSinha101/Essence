import CampaignCard from "@/components/cards/CampaignCard";
import { fetchCampaign } from "@/lib/actions/campaign.actions";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const result = await fetchCampaign(1, 30);
  const user = await currentUser();

  return (
    <>
      <section className="flex flex-col gap-8">
        {result.campaigns.length === 0 ? (
          <p className="no-result">no-result</p>
        ) : (
          <>
            {result.campaigns.map((campaign) => (
              <CampaignCard
                key={campaign._id}
                id={campaign._id}
                currentUserId={user?.id || ""}
                parentId={campaign.parentId}
                content={campaign.text}
                author={campaign.author}
                teams={campaign.teams}
                createdAt={campaign.createdAt}
                comments={campaign.children}
              />
            ))}
          </>
        )}
      </section>
    </>
  );
}
