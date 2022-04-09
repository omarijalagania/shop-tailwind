import { useState, useEffect } from 'react'

const useFormValidation = (initialState, validationSchema) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        console.log('No errors, submit callback called!')
        setIsSubmitting(false)
      } else {
        setIsSubmitting(false)
      }
    }
  }, [errors])

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  const handleBlur = (event) => {
    const errors = validationSchema(values)
    setErrors(errors)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const errors = validationSchema(values)
    setErrors(errors)
    setIsSubmitting(true)
  }

  return {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting,
  }
}

export default useFormValidation
