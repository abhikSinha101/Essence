"use server";

import { revalidatePath } from "next/cache";
import Campaign from "../models/campaign.model";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";

interface Params {
  text: string;
  author: string;
  teamId: string | null;
  path: string;
}

export async function createCampaign({ text, author, teamId, path }: Params) {
  try {
    connectToDB();

    //creating campaign in mongodb
    const createdCampaign = await Campaign.create({
      text,
      author,
      teams: null,
    });

    //update user model
    await User.findByIdAndUpdate(author, {
      $push: { campaigns: createdCampaign._id },
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create campaign: ${error.message}`);
  }
}

export async function fetchCampaign(pagenumber = 1, pageSize = 20) {
  connectToDB();

  //calculate the number of posts to skip
  const skipAmount = (pagenumber - 1) * pageSize;

  //fetch the campaign that hve no parents (top level campaign...)
  const campaignQuery = Campaign.find({
    parentId: { $in: [null, undefined] },
  })
    .sort({ createdAt: "desc" })
    .skip(skipAmount)
    .limit(pageSize)
    .populate({ path: "author", model: User })
    .populate({
      path: "children",
      populate: {
        path: "children",
        model: User,
        select: "_id name parentId image",
      },
    });

  const totalCampaignCount = await Campaign.countDocuments({
    parentId: { $in: [null, undefined] },
  });

  const campaigns = await campaignQuery.exec();

  const isNext = totalCampaignCount > skipAmount + campaigns.length;

  return { campaigns, isNext };
}

export async function fetchCampaignById(campaignId: string) {
  connectToDB();

  try {
    //TODO populate teams
    const campaign = await Campaign.findById(campaignId)
      .populate({
        path: "author",
        model: User,
        select: "_id id name image",
      })
      .populate({
        path: "children",
        populate: [
          { path: "author", model: User, select: "_id id name image" },
          {
            path: "children",
            model: Campaign,
            populate: {
              path: "author",
              model: User,
              select: "_id id name parentId image",
            },
          },
        ],
      })
      .exec();
    return campaign;
  } catch (error: any) {
    throw new Error(`Error fetching campaign ${error}`);
  }
}

export async function addCommentToCampaign(
  campaignId: string,
  commentText: string,
  userId: string,
  path: string
) {
  connectToDB();
  //find the original thread
  const originalCampaign = await Campaign.findById(campaignId);

  if (!originalCampaign) {
    throw new Error("Campaign not found");
  }

  //Create a new campagin with the comment text
  const commentCampaign = new Campaign({
    text: commentText,
    author: userId,
    parentId: campaignId,
  });

  //save the new campaign
  const savedCommentCampaign = await commentCampaign.save();

  //update the original campaign to include the new comment
  originalCampaign.children.push(savedCommentCampaign);

  //save the original campaign
  await originalCampaign.save();
  revalidatePath(path);

  try {
  } catch (error: any) {
    throw new Error(`Error fetching campaign ${error}`);
  }
}
