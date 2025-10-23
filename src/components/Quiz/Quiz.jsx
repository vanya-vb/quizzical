import Question from "./Question/Question";
import Spinner from "../Spinner/Spinner";
import { useQuestions } from "../../api/questionsApi";
import { useState } from "react";

export default function Quiz() {
    const { questions, loading, error } = useQuestions();
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);

    const handleSelect = (question, answer) => {
        setAnswers(prev => ({ ...prev, [question]: answer }));
    };

    const handleCheck = (e) => {
        e.preventDefault();
        setShowResult(true);
    };

    return (
        <section className="relative w-full min-h-screen bg-blue-50 p-8 flex justify-center items-center">
            <img src="/src/assets/yellow.png" alt="" className="absolute top-0 right-0" />
            <img src="/src/assets/blue.png" alt="" className="absolute bottom-0 left-0" />
            {
                loading ? (
                    <Spinner />
                ) : (
                    questions.length === 0 ? (
                        <p className="text-2xl font-semibold text-blue italic">{error}</p>
                    ) : (
                        <form onSubmit={handleCheck} className="w-full lg:w-3xl flex flex-col">
                            {questions.map(({ question, allAnswers, "correct_answer": correctAnswer }) => (
                                <Question
                                    key={question}
                                    title={question}
                                    answers={allAnswers}
                                    correctAnswer={correctAnswer}
                                    selectedAnswer={answers[question]}
                                    setSelectedAnswer={answer => handleSelect(question, answer)}
                                    showResult={showResult}
                                />
                            ))}
                            <button
                                className="bg-blue text-white self-center text-center py-2 px-10 rounded-lg cursor-pointer shadow-md tracking-wide mt-6 z-1"
                            >
                                Check answers
                            </button>
                        </form>
                    )
                )
            }
        </section>
    );
};