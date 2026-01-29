"use client";

import deleteReview from "@/app/actions/delete-review";
import clsx from "clsx";
import { useTransition } from "react";

const btnClass = clsx(
  "opacity-0 group-hover:opacity-100",
  "rounded-full bg-red-300/90 px-4 py-2 text-sm font-medium text-white",
  "transition-opacity hover:bg-red-600 disabled:opacity-50"
);

export default function DeleteReviewButton({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className={btnClass}
      type="button"
      onClick={() => startTransition(() => deleteReview(id))}
      disabled={isPending}
    >
      {isPending ? "Deleting..." : "Delete Review"}
    </button>
  );
}
