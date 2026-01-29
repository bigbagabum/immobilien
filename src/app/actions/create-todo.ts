"use server";

import { db } from "@/db";
import { reviewsTable, todos } from "@/db/schema";
import { authOptions } from "@/lib/auth/auth-options";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


import z from "zod";

const TodoInsertSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Min length must be at least 3 symbols")
    .max(120, "Max length of title is 120 symbols"),
  description: z
    .string()
    .trim()
    .min(3, "Min length must be at least 3 symbols")
    .max(240, "Max length of title is 240 symbols"),
});

export async function createTodo(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("Unauthorized");
  }
  const title = formData.get("title");
  const description = formData.get("description");
  try {
    const newTodo = TodoInsertSchema.parse({ title, description });
    await db.insert(todos).values({ ...newTodo, userId: session.user.id! });

    revalidatePath("/todos");

    // return { success: true };
  } catch (err) {
    if (err instanceof z.ZodError) {
      // return { success: false, fieldErrors: err.flatten().fieldErrors };
    }
  }
  redirect("/todos"); // NEXT_REDIRECT не используйте внутри try catch
}
