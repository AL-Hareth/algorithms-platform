import ContentCard from "../(components)/ContentCard";

type File = {
    id: string;
    title: string;
    description: string;
    url: string;
};

export const dynamic = "force-dynamic";

export default async function Files() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/files");
    const files = await res.json();

    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-6xl font-bold text-blue-600 text-center mb-12">Algorithms Files</h1>
            {files.map((review: File) => (
                <ContentCard key={review.id} title={review.title} description={review.description} url={review.url} />
            ))}
        </div>
    );
}

