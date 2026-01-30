import ChangeTodoToggle from "@/components/change-todo-toggle";
import { db } from "@/db";
import { todos } from "@/db/schema";
import { authOptions } from "@/lib/auth/auth-options";
import { asc, eq } from "drizzle-orm";
import { getServerSession } from "next-auth";

async function getTodosByUserId(userId: number) {
  return db.query.todos.findMany({
    where: eq(todos.userId, userId),
    orderBy: asc(todos.createdAt),
  });
}

export default async function TodosPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user.id) {
    return (
      <div className="mx-auto max-w-md py-20 text-center text-gray-600">
        🔒 Please log in to view your todos.
      </div>
    );
  }

  const userTodos = await getTodosByUserId(session.user.id);

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">My Todos</h1>

      {userTodos.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-10 text-center text-gray-500">
          No todos yet. Time to add one ✨
        </div>
      ) : (
        <ul className="space-y-4">
          {userTodos.map((todo) => (
            <li
              key={todo.id}
              className="rounded-2xl bg-gray-100 p-5 transition hover:bg-gray-200"
            >
              <h3 className="text-lg font-semibold">{todo.title}</h3>

              {todo.description && (
                <p className="mt-1 text-gray-700">
                  {todo.description}
                </p>
              )}
                <ChangeTodoToggle todo={todo} />
              <p className="mt-3 text-sm text-gray-500">
                {todo.createdAt.toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
