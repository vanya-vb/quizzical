import Answer from "./Answer";

export default function Question({ title, answers }) {
    return (
        <div className="text-dark-blue border-b border-gray-200 pb-4 mt-4 z-1">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <div className="flex flex-col gap-3 sm:flex-row" >
                {
                    answers.map(answer => (
                        <Answer option={answer} title={title} />
                    ))
                }
            </div>
        </div>
    );
};