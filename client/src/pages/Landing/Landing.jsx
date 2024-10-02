import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { TemplateContext } from "../../context/TemplateContext"

const Landing = () => {
    const [templateCategory, setTemplateCategory] = useState("business")
    const {setTemplate} = useContext(TemplateContext)
    const navigate = useNavigate()
    const redirectTo = (e) => {
        e.preventDefault()
        setTemplate(templateCategory)
        navigate(`/${templateCategory}`);
    }
    return (
        <div className="landing">
           <form onSubmit={(e)=>redirectTo(e)} >
                <select name="template" id="" onChange={(e)=> setTemplateCategory(e.target.value)}>
                    <option value="business">Business</option>
                    <option value="education">education</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Landing
