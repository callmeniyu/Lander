import React, { useContext } from 'react'
import { TemplateContext } from '../../context/TemplateContext'

const Home = () => {
  const { content } = useContext(TemplateContext)

  return (
      <div className='business'>
          <section>
                <h1>Hero</h1>
                <h2>{content.hero.company}</h2>
                <h3>{content.hero.title}</h3>
            </section>
            <section>
                <h1>about</h1>
                <h2>{content.about.experience}</h2>
                <h2>{content.about.description}</h2>
            </section>
    </div>
  )
}

export default Home