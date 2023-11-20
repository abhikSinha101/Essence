import * as z from "zod";

export const CampaignValidation = z.object({
  campaign: z.string().nonempty().min(3, { message: "Minimum 3 characters." }),
  accountId: z.string(),
});

export const CommentValidation = z.object({
  campaign: z.string().nonempty().min(3, { message: "Minimum 3 characters." }),
});
