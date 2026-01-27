import { db } from "@/db";
import { postsTable } from "@/db/schema";
import DeletePostButton from "../delete-post-btn";

export default async function Forum() {
  const posts = await db.select().from(postsTable);

  return (
    <div>
      <h2 className="text-4xl font-bold py-8">Fresh News of Immobilien</h2>
      <ul className="flex flex-col gap-6 p-2">
        {posts.map((post) => (
          <li key={post.id} className="relative group p-4 bg-gray-100 rounded-2xl ">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.text}</p>
            <DeletePostButton id={post.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}