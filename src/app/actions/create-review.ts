"use server";

import { db } from "@/db";
import { reviewsTable } from "@/db/schema";
import { revalidatePath } from "next/cache";
import z from "zod";

const ReviewInsertSchema = z.object({
  title: z
    .string()
    .min(3, "Min length must be at least 3 symbols")
    .max(120, "Max length is 120 symbols"),
  content: z
    .string()
    .min(3, "Min length must be at least 3 symbols")
    .max(255, "Max length is 255 symbols"),
});

export async function createReview(formData: FormData): Promise<void> {
  const title = formData.get("title");
  const content = formData.get("content");

  try {
    const newReview = ReviewInsertSchema.parse({ title, content });
    await db.insert(reviewsTable).values(newReview);
    revalidatePath("/reviews");
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.log(err.flatten().fieldErrors);
      return;
    }
    throw err;
  }
}
