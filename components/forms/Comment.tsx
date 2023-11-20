"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";

//import { updateUser } from "@/lib/actions/user.actions";
import { CommentValidation } from "@/lib/validations/campaign";
import Image from "next/image";
import { addCommentToCampaign } from "@/lib/actions/campaign.actions";
//import { createCampaign } from "@/lib/actions/campaign.actions";

interface Props {
  campaignId: string;
  currentUserImage: string;
  currentUserId: string;
}

const Comment = ({ campaignId, currentUserImage, currentUserId }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof CommentValidation>>({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      campaign: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
    await addCommentToCampaign(
      campaignId,
      values.campaign,
      JSON.parse(currentUserId),
      pathname
    );

    form.reset();
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="comment-form">
          <FormField
            control={form.control}
            name="campaign"
            render={({ field }) => (
              <FormItem className="flex items-center w-full gap-3">
                <FormLabel>
                  <Image
                    src={currentUserImage}
                    alt="Profile Image"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </FormLabel>
                <FormControl className="border-none bg-transparent items-center">
                  <Input
                    type="text"
                    placeholder="Comment..."
                    className="no-focus text-dark-1 outline-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="comment-form_btn">
            Reply
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default Comment;
