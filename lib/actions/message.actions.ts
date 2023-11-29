"use server";

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import Message from "../models/message.model";

interface Params {
  message: string;
}

export async function createMessage({ message }: Params) {
  try {
    connectToDB();

    //error on creating message via message model
    console.log("created");

    await Message.create({ message });
  } catch (error: any) {
    throw new Error(`Failed to create message: ${error.message}`);
  }
}
