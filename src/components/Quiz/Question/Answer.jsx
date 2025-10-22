export default function Answer({ option, title }) {
    return (
        <label className="inline-block text-center text-sm cursor-pointer grow">
            <input type="radio" name={title} value={option} className="peer hidden" />
            <span className="block px-4 py-1 border border-blue rounded-xl transition peer-checked:bg-light-blue peer-checked:border-light-blue">{option}</span>
        </label>
    );
};