import Image from "next/image";
import Card from "./(components)/Card";

export default function Home() {
    return (
        <div>
            <h1 className="text-6xl font-bold text-blue-600 text-center mb-12">Algorithms</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Card title="Quizzes" description="Test your knowledge with our quizzes" href="/quizzes" />
                <Card title="Exam Reviews" description="Review for your exams" href="/reviews" />
                <Card title="Files" description="Download testbank and other files" href="/files" />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <p className="text-xl text-gray-300 text-center mt-12">What access to a full course? <a className="text-blue-600" href="https://nonerdsapp.com/course?id=11">Click Here</a></p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <h2 className="text-xl text-gray-600 text-center mt-12">Created By: Alhareth Turab</h2>
            </div>
        </div>
    );
}
