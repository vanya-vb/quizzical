import { useEffect, useState } from "react";

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
                    const correctAnswer = question["correct_answer"];
                    const incorrectAnswers = question["incorrect_answers"];
                    const allAnswers = [];
                    
                    const index = Math.floor(Math.random() * (incorrectAnswers.length + 1));
                    allAnswers.push(...incorrectAnswers);
                    allAnswers.splice(index, 0, correctAnswer);

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

    return { questions, loading, error }
}