import QuizCard from "./(components)/QuizCard";

export type Quiz = {
    id: number;
    title: string;
    description: string;
    durationMinutes: number;
}

export const dynamic = "force-dynamic";

export default async function Quizzes() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/quizzes`);
    const quizzes = await res.json();

    return (
        <div className="w-2/3 px-2">
            <h1 className="text-6xl font-bold text-blue-600 text-center mb-12">QUIZZES</h1>
            {quizzes.map((quiz: Quiz) => (
                <QuizCard
                    key={quiz.id}
                    description={quiz.description}
                    title={quiz.title}
                    id={quiz.id}
                    durationMinutes={quiz.durationMinutes}
                />
            ))}
        </div>
    );
}
