export default function Report({ setQuestions, setAnswers, setShowResult }) {
    const resetQuiz = () => {
        setQuestions([]);
        setAnswers({});
        setShowResult(false);
    };

    return (
        <section
            className="absolute top-0 bottom-0 z-2 w-screen min-h-screen bg-black/50 p-6 flex justify-center items-start sm:items-center"
        >
            <div className="w-full md:w-1/2 md:h-1/2 bg-blue-50 rounded-2xl shadow-lg flex flex-col justify-center items-center gap-6 p-6 mt-26 sm:mt-0">
                <div className="text-dark-blue text-center">
                    <p className="text-2xl md:text-3xl font-bold mb-1 font-[Inter]">
                        You scored 3/5 answers
                    </p>
                </div>
                <button
                    onClick={resetQuiz}
                    className="inline-block bg-blue text-white text-center py-2 px-10 rounded-lg cursor-pointer shadow-md tracking-wide"
                >
                    Play again
                </button>
            </div>
        </section>
    );
};