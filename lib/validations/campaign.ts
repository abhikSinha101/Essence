import * as z from "zod";

export const CampaignValidation = z.object({
  campaign: z.string().url().min(3, { message: "Minimum 3 character" }),
  accountId: z.string(),
});
export const CommentValidation = z.object({
  campaign: z.string().url().min(3, { message: "Minimum 3 character" }),
  accountId: z.string(),
});
