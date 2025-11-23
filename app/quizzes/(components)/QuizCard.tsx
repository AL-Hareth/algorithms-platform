import Link from "next/link";
import type { Quiz } from "../page";

export default function QuizCard({ id, title, description, durationMinutes }: Quiz) {
    return (
        <div className="flex bg-gray-800 text-white p-4 items-center rounded-md border border-gray-100 hover:shadow-lg shadow-gray-600 transition-all ease-in-out mb-2">
            <div className="flex flex-col flex-1">
                <h1 className="text-2xl font-bold text-blue-300">{title}</h1>
                <p className="text-lg py-1">{description}</p>
                <span className="bg-amber-800 text-white p-2 rounded-md font-medium w-fit text-sm">duration: {durationMinutes} minutes</span>
            </div>
            <Link href={`/quizzes/${id}`}>{'>'} Start {'<'}</Link>
        </div>
    );
}
