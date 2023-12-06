import * as z from "zod";

export const MessageValidation = z.object({
  id: z.string(),
  senderId: z.string(),
  text: z.string().min(1).max(1000),
  timeStamp: z.number(),
});
