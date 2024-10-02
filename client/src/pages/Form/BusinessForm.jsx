import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { TemplateContext } from "../../context/TemplateContext"

const BusinessForm = () => {
    const navigate = useNavigate()
    const { setContent } = useContext(TemplateContext)
    const [hero, setHero] = useState({
        company: "",
        title: "",
    })
    const [about, setAbout] = useState({
        experience: "",
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
                    name="company"
                    onChange={(e) => handleHero(e)}
                    value={hero.company}
                    placeholder="company"
                />
                <input
                    type="text"
                    name="title"
                    onChange={(e) => handleHero(e)}
                    value={hero.title}
                    placeholder="hero title"
                />
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handleSubmit} name="about">
                <h4>About</h4>
                <input
                    type="text"
                    name="experience"
                    onChange={handleAbout}
                    value={about.experience}
                    placeholder="experience"
                />
                <input
                    type="text"
                    name="description"
                    onChange={handleAbout}
                    value={about.description}
                    placeholder="desccription"
                />
                <button type="submit">Submit</button>
            </form>
            <button onClick={redirectTo}>Continue</button>
        </div>
    )
}

export default BusinessForm
