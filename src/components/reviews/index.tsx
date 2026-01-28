import { db } from "@/db";
import { reviewsTable } from "@/db/schema";
import DeleteReviewButton from "../delete-review-btn";

export default async function Reviews() {
  const reviews = await db.select().from(reviewsTable);

  return (
    <div>
      <h2 className="text-4xl font-bold py-8">Reviews</h2>

      <ul className="flex flex-col gap-6 p-2">
        {reviews.map((review) => (
          <li
            key={review.id}
            className="relative group p-4 pb-14 bg-gray-100 rounded-2xl"
          >
            <h3 className="font-bold text-lg">{review.title}</h3>
            <p className="mt-2 whitespace-pre-wrap">{review.content}</p>

            <DeleteReviewButton id={review.id} />
          </li>
        ))}

        {reviews.length === 0 && (
          <p className="text-gray-600">No reviews yet.</p>
        )}
      </ul>
    </div>
  );
}
