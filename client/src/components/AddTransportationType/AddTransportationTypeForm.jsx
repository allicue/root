import React, { useState } from 'react'
import Form from './Form'
import { createTransportationType } from '../../services/transportationTypes'
import { Redirect } from 'react-router-dom'

function AddTransportationTypeForm() {
  
  const [transportationType, setTransportationType] = useState({
    title: '',
    imgURL: '',
    description: ''
  })
  
  const [isCreated, setCreated] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setTransportationType({
      ...transportationType,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const created = await createTransportationType(transportationType)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={'/transportation-types'} />
  }

  return (
        <Form onSubmit={handleSubmit}>
      <div>      
      <label for="title">Title</label>
        <input name="title"
          placeholder="Walking"
          value={transportationType.title}
          required
          autoFocus
          onChange={handleChange}
        />
        </div>  
      <div>      
      <label for="imgURL">Image</label>
        <input
          name="imgURL"
          placeholder="Insert Image Link Here"
          required
          autoFocus
          onChange={handleChange}
        />
      </div>  
      <div>      
      <label for="description">Description</label>
        <textarea name="description"
          placeholder="Enter Description"
          rows="8"
          value={transportationType.description}
          required
          autoFocus
          onChange={handleChange}
        />
      </div>  
     <div>
      <button>SUBMIT</button>
      </div>
       </Form>

  )
}

export default AddTransportationTypeForm
