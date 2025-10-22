import { Routes, Route } from "react-router"
import Home from "./components/Home/Home"
import Quiz from "./components/Quiz/Quiz"
import NotFound from "./components/NotFound/NotFound"

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App
