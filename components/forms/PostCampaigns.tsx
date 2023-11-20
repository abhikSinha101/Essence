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
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";

//import { updateUser } from "@/lib/actions/user.actions";
import { CampaignValidation } from "@/lib/validations/campaign";
import { createCampaign } from "@/lib/actions/campaign.actions";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}

function PostCampaigns({ userId }: { userId: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof CampaignValidation>>({
    resolver: zodResolver(CampaignValidation),
    defaultValues: {
      campaign: "",
      accountId: userId,
    },
  });

  const onSubmit = async (values: z.infer<typeof CampaignValidation>) => {
    await createCampaign({
      text: values.campaign,
      author: userId,
      teamId: null,
      path: pathname,
    });
    router.push("/main");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" mt-4 flex flex-col justify-start gap-10"
      >
        <FormField
          control={form.control}
          name="campaign"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-2">
              <FormLabel className="text-base-semibold text-dark-2">
                Write a campaign.
              </FormLabel>
              <FormControl className="no-focus border boreder-dark-2 bg-light-2 text-dark-1">
                <Textarea rows={15} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-purple-1 hover:bg-purple-500">
          Post Campaign
        </Button>
      </form>
    </Form>
  );
}

export default PostCampaigns;
