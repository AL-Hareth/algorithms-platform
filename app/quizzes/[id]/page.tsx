import type { Quiz } from "../page";
import QuizClient from "./(components)/QuizClinet";

export type Question = {
    id: string;
    questionText: string;
    questionType: "mcq" | "shortAnswer" | "trueFalse";
    questionImage?: string;
    options: Record<string, string>;
    correctAnswer: string;
    quizId: string;
};

interface QuizWithQuestions extends Quiz {
    questions: Question[];
}

export default async function Quiz({ params }: any) {
    const { id } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/quizzes/${id}`);
    const quiz: QuizWithQuestions = await res.json();

    return (
        <div className="flex flex-col items-center justify-center gap-4 px-2">
            <h1 className="text-6xl font-bold text-blue-600 text-center mb-12">{quiz.title}</h1>
            <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-xl text-gray-300 text-center">{quiz.description}</p>
                <span className="bg-amber-800 text-white p-2 rounded-md font-medium w-fit text-sm">duration: {quiz.durationMinutes} minutes</span>
            </div>
            <QuizClient questions={quiz.questions} />
        </div>
    );
}
