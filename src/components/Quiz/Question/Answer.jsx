export default function Answer({ option, title, correctAnswer, selectedAnswer, setSelectedAnswer, showResult }) {

    const correctStyling = {
        backgroundColor: '#94D7A2',
        borderColor: '#94D7A2',
        color: '#293264'
    };

    const errorStyling = {
        backgroundColor: '#F8BCBC',
        borderColor: '#F8BCBC',
        color: 'gray',
    };

    const isSelected = selectedAnswer === option;
    const isCorrect = option === correctAnswer;

    let style = {};
    if (showResult) {
        if (isCorrect) style = correctStyling;
        else if (isSelected && !isCorrect) style = errorStyling;
    }

    return (
        <label className="text-center text-sm cursor-pointer">
            <input
                type="radio"
                name={title}
                value={option}
                onChange={() => setSelectedAnswer(option)}
                checked={isSelected}
                className="peer hidden"
            />
            <span
                style={style}
                className={`block px-4 py-1 border ${showResult ? "border-gray-400 text-gray-400" : "border-blue"}  rounded-xl transition peer-checked:bg-light-blue peer-checked:border-light-blue`}
            >
                {option}
            </span>
        </label>
    );
};