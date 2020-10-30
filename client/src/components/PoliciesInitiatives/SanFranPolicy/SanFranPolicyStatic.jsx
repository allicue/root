import React from 'react'
import { Link } from 'react-router-dom'
import Styled from './Styled'


function SanFranPolicyStatic() {
  return (
    <>
      <Styled>
<div className="top-container">
      <div className="top-left-container">
      <p className="page-direction"><Link to='/'>Home</Link>/ <Link to='/policies-and-initiatives'>Policies + Initiatives</Link></p>
      <Link to='/'><img className="root-logo" src="https://i.imgur.com/mV0w6j7.png" alt="ROOT Logo"/></Link>
      <h1 className='title'>SAN FRANSISCO</h1>
      </div>
      <div className="top-right-container">
        <p className='enter-location'>Or enter your location:</p>
        <input className="top-right-input" type="text" placeholder="Zipcode or City, State" />
        </div>
      </div>
      <div className="middle-container">
       
          <div className="content-container">
          <img className="content-image" src="https://i.imgur.com/TKt1r4C.png" alt="Commuter Benefits Ordinance" />
            <div className='box-text-container'>
            <p className='box-text'>Commuter Benefits Ordinance</p> <p className='box-text'> Ut wisi enim ad </p> <p className='box-text'> Duis autem vel eum</p> <p className="box-text-small">California EPA ></p>
          </div>
          </div>
      
          <div className="content-container">
          <img className="content-image" src="https://i.imgur.com/1gxvw3j.png" alt="Tenant Bicycle Parking" />
            <div className='box-text-container'>
            <p className='box-text'>Tenant Bicycle Parking </p> <p className='box-text'> Ut wisi enim ad </p> <p className='box-text'> Duis autem vel eum</p> <p className="box-text-small">California EPA ></p>
            </div>
          </div>
          
          <div className="content-container">
          <img className="content-image" src="https://i.imgur.com/IbItVIU.png" alt="Congestion Pricing" />
            <div className='box-text-container'>
            <p className='box-text'>Congestion Pricing </p> <p className='box-text'> Ut wisi enim ad </p> <p className='box-text'> Duis autem vel eum</p> <p className="box-text-small">California EPA ></p>
            </div>
          </div>
          
        </div>


        
        </Styled>
      </>
  )
}

export default SanFranPolicyStatic
