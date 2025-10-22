import { Routes, Route } from "react-router"
import Home from "./components/Home/Home"
import Quiz from "./components/Quiz/Quiz"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  )
}

export default App
