import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { TemplateContext } from "../../context/TemplateContext"

const EducationForm = () => {
    const navigate = useNavigate()
    const { setContent } = useContext(TemplateContext)
    const [hero, setHero] = useState({
        institution: "",
        quote: "",
    })
    const [about, setAbout] = useState({
        service: "",
        description: "",
    })

    const handleHero = (e) => {
        const { name, value } = e.target
        setHero((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const handleAbout = (e) => {
        const { name, value } = e.target
        setAbout((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {name} = e.target
        const sectionUpdateMap = {
            "hero": hero,
            "about":about
        }
        const updateSection = sectionUpdateMap[name]
        
        setContent((prev) => ({
            ...prev,
            [name]:updateSection,
        }))
    }

    const redirectTo = () => {
        navigate("output")
    }

    return (
        <div>
            <form onSubmit={handleSubmit} name="hero">
                <h4>Hero</h4>
                <input
                    type="text"
                    name="institution"
                    onChange={(e) => handleHero(e)}
                    value={hero.institution}
                    placeholder="institution"
                />
                <input
                    type="text"
                    name="quote"
                    onChange={(e) => handleHero(e)}
                    value={hero.quote}
                    placeholder="hero quote"
                />
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handleSubmit} name="about">
                <h4>About</h4>
                <input
                    type="text"
                    name="service"
                    onChange={handleAbout}
                    value={about.service}
                    placeholder="service"
                />
                <input
                    type="text"
                    name="description"
                    onChange={handleAbout}
                    value={about.description}
                    placeholder="description"
                />
                <button type="submit">Submit</button>
            </form>
            <button onClick={redirectTo}>Continue</button>
        </div>
    )
}

export default EducationForm
