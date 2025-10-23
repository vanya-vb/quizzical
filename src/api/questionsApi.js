import { useEffect, useState } from "react";
import { decode } from 'html-entities';

export const useQuestions = () => {
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
                    const questionTitle = decode(question["question"]);
                    const correctAnswer = decode(question["correct_answer"]);
                    const incorrectAnswers = question["incorrect_answers"].map(answer => decode(answer));
                    const allAnswers = [...incorrectAnswers];

                    const index = Math.floor(Math.random() * (incorrectAnswers.length + 1));
                    allAnswers.splice(index, 0, correctAnswer);

                    return {
                        ...question,
                        question: questionTitle,
                        correct_answer: correctAnswer,
                        incorrect_answers: incorrectAnswers,
                        allAnswers
                    };
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

    return { questions, loading, error }
}