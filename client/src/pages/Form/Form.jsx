import React from 'react'
import { useParams } from 'react-router-dom'
import BusinessForm from './BusinessForm'
import EducationForm from './EducationForm'
const Form = () => {
    const { templateCategory } = useParams()
    
    const formMap = {
        business: <BusinessForm />,
        education:<EducationForm />
    }

    const selectedForm = formMap[templateCategory]
  return (
    <div>{selectedForm}</div>
  )
}

export default Form