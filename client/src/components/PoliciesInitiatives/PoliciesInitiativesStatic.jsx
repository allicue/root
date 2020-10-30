import React from 'react'
import { Link } from 'react-router-dom'

function PoliciesInitiativesStatic() {
  return (
<>
<div className="top-container">
      <div className="top-left-container">
      <p className="page-direction"><Link to='/'>Home</Link>/ <Link to='/policies-and-initiatives'>Policies + Initiatives</Link></p>
      <Link to='/'><img className="root-logo" src="https://i.imgur.com/mV0w6j7.png" alt="ROOT Logo"/></Link>
      <h1 className='title'>POLICIES + INITIATIVES</h1>
      </div>
      <div className="top-right-container">
        <p className='enter-location'>Or enter your location:</p>
        <input className="top-right-input" type="text" placeholder="Zipcode or City, State" />
        </div>
      </div>
      <div className="middle-container">
       <div className="middle-left">
        <div className="content-container">
            <img className="content-image" src="https://i.imgur.com/XX7kg1z.png" alt="San Fransisco" />
            <h1 className="image-text">SAN FRANSISCO</h1>
       <div className='box-text-container'>
          <p className='box-text'>Commuter Benefits Ordinance </p> <p className='box-text'> Tenant Bicycle Parking </p> <p className='box-text'> Congestion Pricing</p> <p className="box-text-small">California EPA ></p>
          </div>
          </div>
          
          <div className="content-container">
          <img className="content-image" src="https://i.imgur.com/WYjE0sv.jpg" alt="Los Angeles" />
          <h1 className="image-text">LOS ANGELES</h1>
            <div className='box-text-container'>
          <p className='box-text'>Lorem ipsum dolor sir amet </p> <p className='box-text'> Ut wisi enim ad </p> <p className='box-text'> Duis autem vel eum</p> <p className="box-text-small">California EPA ></p>
          </div>
          </div>

          <div className="content-container">
          <img className="content-image" src="https://i.imgur.com/Jvc4VTr.jpg" alt="Seattle" />
          <h1 className="image-text">PORTLAND</h1>
            <div className='box-text-container'>
          <p className='box-text'>Lorem ipsum dolor sir amet </p> <p className='box-text'> Ut wisi enim ad </p> <p className='box-text'> Duis autem vel eum</p> <p className="box-text-small">California EPA ></p>
          </div>
          </div>
         
         
        </div>
        <div className="middle-right">
          <div className="content-container">
          <img className="content-image" src="https://i.imgur.com/Jvc4VTr.jpg" alt="Los Angeles" />
          <h1 className="image-text">SEATTLE</h1>
            <div className='box-text-container'>
          <p className='box-text'>Lorem ipsum dolor sir amet </p> <p className='box-text'> Ut wisi enim ad </p> <p className='box-text'> Duis autem vel eum</p> <p className="box-text-small">California EPA ></p>
          </div>
          </div>

          <div className="content-container">
          <img className="content-image" src="https://i.imgur.com/x9wKRcK.jpg" alt="New York" />
          <h1 className="image-text">NEW YORK</h1>
            <div className='box-text-container'>
          <p className='box-text'>Lorem ipsum dolor sir amet </p> <p className='box-text'> Ut wisi enim ad </p> <p className='box-text'> Duis autem vel eum</p> <p className="box-text-small">California EPA ></p>
          </div>
          </div>

          <div className="content-container">
          <img className="content-image" src="https://i.imgur.com/KRbCKiX.jpg" alt="Chicago" />
          <h1 className="image-text">CHICAO</h1>
            <div className='box-text-container'>
          <p className='box-text'>Lorem ipsum dolor sir amet </p> <p className='box-text'> Ut wisi enim ad </p> <p className='box-text'> Duis autem vel eum</p> <p className="box-text-small">California EPA ></p>
          </div>
          </div>

            </div>
      </div>
      </>
  )
}

export default PoliciesInitiativesStatic
