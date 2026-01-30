"use client";

import changeTodoStatus from "@/app/actions/change-todo-status";
import { Badge, BadgeCheck, Loader } from "lucide-react";
import { useTransition } from "react";

interface Todo {
  id: number;
  title: string;
  createdAt: Date;
  description: string;
  status: boolean | null;
  userId: number;
}

export default function ChangeTodoToggle({ todo }: { todo: Todo }) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      className="transition"
      type="button"
      onClick={() =>
        startTransition(async () => {
          await new Promise((res) => setTimeout(res, 200));
          changeTodoStatus(todo.id);
        })
      }
    >
      {isPending ? (
        <Loader />
      ) : todo.status ? (
        <BadgeCheck color="#55aa7a" />
      ) : (
        <Badge color="#dd9292" />
      )}
    </button>
  );
}