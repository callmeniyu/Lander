import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import TemplateContextProvider from "./context/TemplateContext.jsx"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <TemplateContextProvider>
            <App />
        </TemplateContextProvider>
    </StrictMode>
)
