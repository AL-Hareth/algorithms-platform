import Link from "next/link";

export default function Card({ title, description, href }: { title: string; description: string; href: string; }) {
    return (
        <Link href={href ?? "/"}>
            <div className="p-4 w-64 h-64 lg:w-80 lg:h-80 bg-zinc-800 rounded-lg flex flex-col items-center justify-center gap-4 hover:border border-blue-600 ease-in-out transition-all hover:shadow hover:shadow-2xl shadow-blue-800">
                <h1 className="text-3xl font-bold text-blue-600">{title}</h1>
                <p className="text-gray-400 text-md">{description}</p>
            </div>
        </Link>
    );
}
