import Question from "./Question/Question";

export default function Quiz() {
    return (
        <section className="relative w-screen min-h-screen bg-blue-50 p-8 flex justify-center items-center">
            <img src="/src/assets/yellow.png" alt="" className="absolute top-0 right-0" />
            <img src="/src/assets/blue.png" alt="" className="absolute bottom-0 left-0" />
            <form className="w-full lg:w-3xl flex flex-col">

                <Question title="Question 1?" />
                <Question title="Question 2?"/>
                <Question title="Question 3?"/>
                <Question title="Question 4?"/>
                <Question title="Question 5?"/>

                <button
                    className="bg-blue text-white self-center text-center py-2 px-10 rounded-lg cursor-pointer shadow-md tracking-wide mt-8 z-1"
                >
                    Check answers
                </button>

            </form>
        </section>
    );
};