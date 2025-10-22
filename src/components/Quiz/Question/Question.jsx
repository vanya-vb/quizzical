import Answer from "./Answer";

export default function Question({ title }) {

    return (
        <div className="text-dark-blue border-b border-gray-200 pb-4 mt-4 z-1">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <div className="flex flex-col gap-3 md:gap-10 sm:flex-row" >
                <Answer option="Option 1" title={title} />
                <Answer option="Option 2" title={title} />
                <Answer option="Option 3" title={title} />
                <Answer option="Option 4" title={title} />
            </div>
        </div>
    );
};