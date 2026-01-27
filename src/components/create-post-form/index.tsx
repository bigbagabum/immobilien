import { createPost } from "@/app/actions/create-post";
import { Button } from "../ui/button";

export default function CreatePostForm() {
  return (
    <div className="bg-gray-100 rounded-2xl p-8 max-w-100 my-8">
      <h2 className="font-bold text-3xl">Add post</h2>
      <form action={createPost} className="flex flex-col gap-4">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" className="border rounded bg-white"/>

        <label htmlFor="text">Text</label>
        <input type="text" name="text" id="text" className="border rounded bg-white"/>

      <Button variant="outline" type="submit">Save</Button>
      </form>
    </div>
  );
}
