import { Link } from "react-router";

export default function Home() {
    return (
        <section
            className="w-screen h-screen bg-[url(https://images.unsplash.com/photo-1608817618454-b0e9aef7a342?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071))] bg-top bg-cover p-6 flex justify-center items-center"
        >
            <div className="w-full md:w-1/2 md:h-1/2 bg-blue-50/70 rounded-2xl shadow-lg flex flex-col justify-center items-center gap-12 p-6 tracking-wider">
                <div className="text-dark-blue text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-1">Quizzical</h1>
                    <p className="lg:text-lg tracking-wide">Challenge your mind in minutes.</p>
                </div>
                <Link
                    to="/quiz"
                    className="inline-block tracking-wider bg-blue text-white text-center py-2 px-10 rounded-lg cursor-pointer shadow-md"
                >
                    Start quiz
                </Link>
            </div>
        </section>
    );
};