import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Form from "./Form"
import Result from "./Result"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>

  )
}

export default App
