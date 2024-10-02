import React, { useContext } from "react"
import Business from "../../templates/Business/Home"
import Education from "../../templates/Education/Home"
import { TemplateContext } from "../../context/TemplateContext"
import { useParams } from "react-router-dom"
const Output = () => {
    const { template, content } = useContext(TemplateContext)
    const templateMap = {
        business: <Business />,
        education: <Education />,
    }
    const selectedTemplate = templateMap[template]
    return (
        <div>
            {selectedTemplate}
        </div>
    )
}

export default Output
