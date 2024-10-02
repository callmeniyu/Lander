import React, { createContext, useEffect, useState } from "react"

export const TemplateContext = createContext(null)

const TemplateContextProvider = (props) => {
    const [template, setTemplate] = useState("business")
    const [content, setContent] = useState(null)

    const contextValue = { setTemplate, template, content, setContent  }

    useEffect(() => {
        console.log("aaaaa",content)
    }, [content])
    return <TemplateContext.Provider value={contextValue}>{props.children}</TemplateContext.Provider>
}

export default TemplateContextProvider
