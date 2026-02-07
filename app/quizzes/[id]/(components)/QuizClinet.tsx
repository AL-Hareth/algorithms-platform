"use client";
import { MouseEvent, useState } from "react";
import type { Question } from "../page";
import Image from "next/image";

export default function QuizClient({ questions }: { questions: Question[] }) {
    const [userAnswers, setUserAnswers] = useState<{ questionId: string; answer: string }[]>([]);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswers = () => {
        setScore(0);

        questions.forEach(question => {
            const answer = userAnswers.find(a => a.questionId === question.id);
            if (answer && answer.answer === question.correctAnswer) {
                setScore(s => s + 1);
            }
        });

        setShowScore(true);
    };

    return (
        <>
            {questions.map((question: Question) => (
                <div key={question.id} className="bg-black text-white p-4 items-center rounded-md border-green-700 border-t-4 w-full">
                    <h1 className="text-2xl font-bold">{question.questionText}</h1>
                    <div className="flex justify-center">
                        {question.questionImage && (
                            <Image
                                width={500}
                                height={500}
                                src={question.questionImage}
                                alt={question.questionText}
                                className="w-fit h-fit my-2"
                            />
                        )}
                    </div>
                    {question.questionType === "mcq" && (
                        <div>
                            {Object.entries(question.options).map(([optionKey, optionValue]) => (
                                <div key={optionKey} className={`py-2 px-1 flex items-center gap-2 
                                    ${(showScore && question.correctAnswer === optionKey)
                                        ? "bg-green-800 rounded-md"
                                        : ""}
                                `}>
                                    <input
                                        type="radio"
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all checked:bg-blue-200"
                                        name={question.id}
                                        id={question.id}
                                        onChange={() => {
                                            setUserAnswers((prev) => {
                                                const index = prev.findIndex(item => item.questionId === question.id);
                                                if (index === -1) {
                                                    return [...prev, { questionId: question.id, answer: optionKey }];
                                                }

                                                prev[index] = { questionId: question.id, answer: optionKey };
                                                return [...prev];
                                            });
                                        }}
                                    />
                                    <label htmlFor={optionKey} className="text-lg cursor-pointer">{optionValue}</label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <button
                className="bg-blue-600 text-white text-lg rounded-md border-none px-4 py-2"
                onClick={handleAnswers}
            >Submit</button>
            {showScore && <div className="text-2xl font-bold"   >Your Score: {score}/{questions.length}</div>}
        </>
    );
}
