"use server";
import { db } from "@/db";
import { postsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export default async function deletePost(id: number) {
    await db.delete(postsTable).where(eq(postsTable.id, id));
    revalidatePath("/news");
}