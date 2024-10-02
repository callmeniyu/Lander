import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing/Landing"
import Output from "./pages/Output/Output"
import Form from "./pages/Form/Form"
import Portfolio from "./templates/Portfolio/Portfolio"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path=":templateCategory" element={<Form />} />
                <Route path=":templateCategory/output" element={<Output />} />
                <Route path="portfolio" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
