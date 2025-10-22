import { BeatLoader } from "react-spinners";

export default function Spinner() {
    return (
        <BeatLoader
            color="#4D5B9E"
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};