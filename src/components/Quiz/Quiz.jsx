import { useState } from "react";
import { useQuestions } from "../../api/questionsApi";
import Question from "./Question/Question";
import Spinner from "../Spinner/Spinner";
import { toast } from "react-toastify";

import blueVectorShape from '../../assets/blue.png';
import yellowVectorShape from '../../assets/yellow.png';

export default function Quiz() {
    const { questions, setQuestions, loading, error } = useQuestions();
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleSelect = (question, answer) => {
        setAnswers(prev => ({ ...prev, [question]: answer }));
    };

    const handleCheck = (e) => {
        e.preventDefault();

        if (Object.keys(answers).length < 5) {
            toast.warning('Please answer the questions!');
            return;
        }

        let correctCount = 0;

        questions.forEach(q => {
            if (answers[q.question] === q["correct_answer"]) {
                correctCount++;
            }
        });

        setScore(correctCount);
        setShowResult(true);
    };

    const resetQuiz = () => {
        setAnswers({});
        setScore(0);
        setQuestions([]);
        setShowResult(false);
    };

    return (
        <section className="relative w-full min-h-screen sm:h-screen bg-blue-50 p-8 flex justify-center items-center">
            <img src={yellowVectorShape} alt="" className="absolute top-0 right-0" />
            <img src={blueVectorShape} alt="" className="absolute bottom-0 left-0" />
            {
                loading ? (
                    <Spinner />
                ) : (
                    questions.length === 0 ? (
                        <p className="text-2xl font-semibold text-blue italic">{error}</p>
                    ) : (
                        <form onSubmit={handleCheck} className="w-full lg:w-3xl flex flex-col">
                            {questions.map(({ question, allAnswers, "correct_answer": correctAnswer }, index) => (
                                <Question
                                    key={index}
                                    title={question}
                                    answers={allAnswers}
                                    correctAnswer={correctAnswer}
                                    selectedAnswer={answers[question]}
                                    setSelectedAnswer={answer => handleSelect(question, answer)}
                                    showResult={showResult}
                                />
                            ))}
                            {showResult && (
                                <p className="text-center text-dark-blue font-bold text-xl sm:text-2xl mt-3 z-1">
                                    You scored {score}/{questions.length} answers
                                </p>
                            )}
                            <button
                                type={showResult ? "button" : "submit"}
                                onClick={showResult ? resetQuiz : null}
                                className="bg-blue text-white self-center text-center py-2 px-10 rounded-lg cursor-pointer shadow-md tracking-wide mt-6 z-1"
                            >
                                {showResult ? "Reset quiz" : "Check answers"}
                            </button>
                        </form>
                    )
                )
            }
        </section>
    );
};