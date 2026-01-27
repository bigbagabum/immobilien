import CreateReviewForm from "@/components/create-review-form";
import Reviews from "@/components/reviews";

export default function ReviewsPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <CreateReviewForm />
      <Reviews />
    </section>
  );
}
