"use server";

import { db } from "@/db";
import { postsTable } from "@/db/schema";
import { revalidatePath } from "next/cache";
import z from "zod";

const PostInsertSchema = z.object({
  title: z
    .string()
    .min(3, "Min lenth must be at least 3 symbols")
    .max(120, "Max length is 120 symbols"),
  text: z
    .string()
    .min(3, "Min lenth must be at least 3 symbols")
    .max(255, "Max length is 255 symbols"),
});

export async function createPost(formData: FormData) {
  const title = formData.get("title");
  const text = formData.get("text");

  try {
    const newPost = PostInsertSchema.parse({ title, text });
    await db.insert(postsTable).values(newPost);
    revalidatePath("/news");
    //return { success: true}
  } catch (err) {
    if (err instanceof z.ZodError) {
       // return {success: false, fieldErrors: err.flatten().fieldErrors};
    }
  }
}
