import { useEffect, useEffectEvent, useState } from "react";
import Question from "./Question/Question";
import Spinner from "../Spinner/Spinner";

export default function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        const fetchQuiz = async () => {
            try {
                const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                const quiz = data.results;

                const newQuiz = quiz.map(question => {
                    const allAnswers = [question["correct_answer"], ...question["incorrect_answers"]];
                    return { ...question, allAnswers };
                });

                setQuestions(newQuiz);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchQuiz();
    }, [questions]);

    return (
        <section className="relative w-screen h-screen bg-blue-50 p-8 flex justify-center items-center">
            <img src="/src/assets/yellow.png" alt="" className="absolute top-0 right-0" />
            <img src="/src/assets/blue.png" alt="" className="absolute bottom-0 left-0" />
            {loading ? (
                <Spinner />
            ) : (
                questions.length === 0 ? (
                    <p className="text-2xl font-semibold text-blue italic">{error}</p>
                ) : (
                    <form className="w-full lg:w-3xl flex flex-col">
                        {questions.map(({ question, allAnswers, "correct_answer": correctAnswer }) => (
                            <Question
                                key={question}
                                title={question}
                                answers={allAnswers}
                                correctAnswer={correctAnswer}
                            />
                        ))}
                        <button
                            className="bg-blue text-white self-center text-center py-2 px-10 rounded-lg cursor-pointer shadow-md tracking-wide mt-6 z-1"
                        >
                            Check answers
                        </button>
                    </form>
                )
            )}
        </section >
    );
};