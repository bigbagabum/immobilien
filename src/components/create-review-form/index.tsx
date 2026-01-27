import { createReview } from "@/app/actions/create-review";
import { Button } from "../ui/button";

export default function CreateReviewForm() {
  return (
    <div className="bg-gray-100 rounded-2xl p-8 max-w-100 my-8">
      <h2 className="font-bold text-3xl">Add review</h2>

      <form action={createReview} className="flex flex-col gap-4 mt-4">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="border rounded bg-white p-2"
        />

        <label htmlFor="content">Content</label>
        <input
          type="text"
          name="content"
          id="content"
          className="border rounded bg-white p-2"
        />

        <Button variant="outline" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
}
