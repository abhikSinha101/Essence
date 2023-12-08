"use client";

import { Input } from "../ui/input";
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

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageValidation } from "@/lib/validations/message";
import { Send } from "lucide-react";
import React from "react";

import { usePathname, useRouter } from "next/navigation";
import {
  associateMessageWithChat,
  createMessage,
} from "@/lib/actions/chat.action";

interface params {
  chatId: string;
  senderId: string;
  receiverId: string;
}
function PostMessage({ chatId, senderId, receiverId }: params) {
  const router = useRouter();

  React.useEffect(() => {
    const enter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        form.handleSubmit(onSubmit)();
      }
    };
    document.addEventListener("keydown", enter);
    return () => document.removeEventListener("keydown", enter);
  }, []);

  const form = useForm<z.infer<typeof MessageValidation>>({
    resolver: zodResolver(MessageValidation),
    defaultValues: {
      text: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof MessageValidation>) => {
    console.log(values.text, chatId, senderId, receiverId);
    //messaging
    const message = await createMessage(
      chatId,
      senderId,
      receiverId,
      values.text
    );

    await associateMessageWithChat(chatId, message._id);

    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-row gap-2"
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl className="no-focus bg-glassmorphism_display text-dark-1">
                <Input
                  type="message"
                  placeholder="message"
                  className="w-full"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="flex bg-dark-2 hover:bg-dark-2">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
}

export default PostMessage;
