import * as z from "zod";

export const MessageValidation = z.object({
  message: z.string().min(1).max(1000),
});
