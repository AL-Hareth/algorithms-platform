export default function ContentCard({ title, description, url }: { title: string; description: string; url: string; }) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 bg-gray-800 w-full p-4 rounded-md border border-gray-100 hover:shadow hover:shadow-lg shadow-gray-600 transition-all ease-in-out">
            <h1 className="text-3xl font-bold text-blue-400">{title}</h1>
            <p className="text-gray-400 text-md">{description}</p>
            <a className="text-blue-600" href={url} target="_blank">Click Here</a>
        </div>
    );
}
