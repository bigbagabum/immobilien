"use client";

import deletePost from "@/app/actions/delete-post";
import clsx from "clsx";
import { useTransition } from "react";

const btnClass = clsx(
    "absolute bottom-4 right-4",
    "opacity-0 group-hover:opacity-100",
    "rounded-full bg-red-300/90 px-4 py-2 text-sm font-medium text-white",
    "transition-opacity hover:bg-red-600 disabled:opacity-50"
  );

export default function DeletePostButton({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      className={btnClass}
      type="button"
      onClick={() => startTransition(() => deletePost(id))}
      disabled={isPending}
    >
      {isPending ? "Deleting..." : "Delete Post"}
    </button>
  );
}
