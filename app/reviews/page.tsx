import ContentCard from "../(components)/ContentCard";

type Review = {
    id: string;
    title: string;
    description: string;
    url: string;
};

export const dynamic = "force-dynamic";

export default async function Reviews() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/reviews");
    const reviews = await res.json();

    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-6xl font-bold text-blue-600 text-center mb-12">Reviews</h1>
            {reviews.map((review: Review) => (
                <ContentCard key={review.id} title={review.title} description={review.description} url={review.url} />
            ))}
        </div>
    );
}
