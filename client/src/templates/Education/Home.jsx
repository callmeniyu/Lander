import React, { useContext } from 'react'
import { TemplateContext } from '../../context/TemplateContext'

const Home = () => {
  const { content } = useContext(TemplateContext)
  return (
      <div className='education'>
          <section>
                <h1>Hero</h1>
                <h2>{content.hero.institution}</h2>
                <h3>{content.hero.quote}</h3>
            </section>
            <section>
                <h1>about</h1>
                <h2>{content.about.service}</h2>
                <h2>{content.about.description}</h2>
            </section>
    </div>
  )
}

export default Home