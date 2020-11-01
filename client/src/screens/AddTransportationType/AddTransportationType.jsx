import React from 'react'
import { Link } from 'react-router-dom'
import AddTransportationTypeForm from '../../components/AddTransportationType/AddTransportationTypeForm'
import StyledDiv from './StyledAddTransportationType.js'


function AddTransportationType() {
  return (
    <>
      <StyledDiv>
<div className="top-container">
      <div className="top-left-container">
      <p className="page-direction"><Link to='/'>Home</Link>/ <Link to='/add-transportation-type'>Add Transportation Type</Link></p>
      <Link to='/'><img className="root-logo" src="https://i.imgur.com/mV0w6j7.png" alt="ROOT Logo"/></Link>
      <h1 className='title'>ADD TRANSPORTATION TYPE</h1>
      </div>
      <div className="top-right-container">
        </div>
      </div>
      <div className="middle-container">
         
        <AddTransportationTypeForm />
       
          </div>
       

        </StyledDiv>
      </>
  )
}

export default AddTransportationType
