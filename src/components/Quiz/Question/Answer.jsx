export default function Answer({ option, title, correctAnswer }) {
    const correctStyling = {
        backgroundColor: '#94D7A2',
        borderColor: '#94D7A2',
    };

    const errorStyling = {
        backgroundColor: '#F8BCBC',
        borderColor: '#F8BCBC',
        color: '#293264',
    };

    return (
        <label className="text-center text-sm cursor-pointer">
            <input type="radio" name={title} value={option} className="peer hidden" />
            <span className="block px-4 py-1 border border-blue rounded-xl transition peer-checked:bg-light-blue peer-checked:border-light-blue">{option}</span>
        </label>
    );
};