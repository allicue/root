import React from 'react'
import './PoliciesInitiatives.css'


function PoliciesInitiatives() {
  return (
  <>
    <div className="top-left-container">
      <p className="page-direction">Home/ Policies + Initiatives</p>
      <img className="root-logo" src="https://i.imgur.com/mV0w6j7.png" alt="ROOT Logo"/>
      <h1 className='title'>POLICIES + INITIATIVES</h1>
      </div>
      <div className="top-right-container">
        <p>Or enter your location:</p>
        <input type="text" placeholder="Zipcode or City, State" />
      </div>
</>
  )
}

export default PoliciesInitiatives
