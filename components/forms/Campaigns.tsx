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

function Campaigns({ userId }: { userId: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(CampaignValidation),
    defaultValues: {
      campaigns: "",
      accountId: userId,
    },
  });

  const onSubmit = () => {};
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" mt-8 flex flex-col justify-start gap-10"
      >
        <FormField
          control={form.control}
          name="campaigns"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-2">
              <FormLabel className="text-base-semibold text-dark-2">
                Contnet
              </FormLabel>
              <FormControl className="no-focus border boreder-dark-2 bg-dark-1 text-light-1">
                <Textarea rows={15} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-purple-1">
          Post Campaign
        </Button>
      </form>
    </Form>
  );
}

export default Campaigns;
