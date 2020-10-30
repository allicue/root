import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

let StyledDiv = styled.div`
.top-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 33px;
}

a {
  text-decoration: none;
  color: #3d3d3d;
}
.top-left-container {
  margin-left: -40px;
}

.top-right-container {
  margin-top: 310px;
}

.page-direction {
  margin-left: 20px;
  width: 189px;
  height: 51px;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #3d3d3d;
}

.page-direction:hover {
  cursor: default;
}

.title {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-align: center;
  color: #3d3d3d;
  margin-left: 28px;
  font-size: 48px;
}
.title:hover {
  cursor: default;
}

.root-logo {
  max-width: 518px;
  max-height: 212px;
}

.top-right-input {
  width: 302px;
  height: 36px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  background: url("../../Assets/Icons/ROOT_MapPin-17.svg") no-repeat right -20px
    center;
  background-size: 100px 100px;
  width: 387px;
  height: 49.1px;
  border-radius: 30px;
  border: solid 1px #3d3d3d;
  background-color: #ffffff;
  text-indent: 20px;
  box-shadow: 2px 2px 4px 1px #999;
}

input::placeholder {
  font-family: "Monsterrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #3d3d3d;
}

:focus {
  outline: none;
}

.enter-location {
  width: 249px;
  height: 24px;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  color: #3d3d3d;
  margin: 0 auto;
}
.enter-location:hover {
  cursor: default;
}
img:hover {
  cursor: pointer;
}

.content-image {
  width: 288px;
  height: 256px;
  filter: contrast(70%) brightness(92%);
}

.box-text-container {
  width: 287px;
  height: 236px;
  background-color: #e8e4d9;
  padding-top: 1px;
  padding-bottom: 20px;
}

.box-text {
  font-family: "Monsterrat", sans-serif;
  font-size: 24px;
  font-weight: 500;
  text-align: left;
  color: #3d3d3d;
  display: flex;
  margin: 29px 19px 29px 22px;
}

.box-text:hover {
  cursor: pointer;
  transform: translate(0.5px);
}

.box-text-small {
  font-family: "Monsterrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: italic;
  margin-left: 22px;
  color: #3d3d3d;
}

.box-text-small:hover {
  cursor: pointer;
  transform: translate(0.5px);
}

.content-container {
  display: flex;
  flex-flow: row nowrap;
  margin: 16px 19px 16px 19px;
}

.image-text {
  position: absolute;
  font-family: "Monsterrat", sans-serif;
  font-size: 27px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  width: 290px;
  height: 101px;
  margin-top: 120px;
}

.image-text:hover {
  cursor: pointer;
  transform: translate(0.7px);
  text-decoration: underline;
  text-decoration-thickness: 3px;
}

.middle-container {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-top: 66px;
  margin-bottom: 118px;
  justify-content: center;
}

.middle-right {
  flex-flow: column;
  align-items: flex-end;
}

.middle-left {
  flex-direction: column;
  align-items: flex-start;
}

@media screen and (max-width: 768px) {
  .top-container {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: flex-start;
    margin-top: 33px;
  }

  .top-left-container {
    margin: 0 auto;
  }

  .box-text-container{
    display: none;
  }
  .top-right-container {
    margin: 0 auto;
    margin-top: 10px;
  }

  .middle-container {
    display: flex;
    flex-flow: row nowrap;
    margin: 20px;
  }
}
`
function PoliciesInitiativesStatic() {
  return (
    <>
      <StyledDiv>
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
       <p className='box-text'>Commuter Benefits Ordinance </p> <p className='box-text'> Tenant Bicycle Parking </p> <p className='box-text'> Congestion Pricing</p> <p className="box-text-small">California EPA ></p>          </div>
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
          <img className="content-image" src="https://i.ibb.co/Rcy7c1S/seattle-citiypolicies-hi-res.png" alt="Seattle" />
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
          <img className="content-image" src="https://i.imgur.com/xiZTdOz.jpg" alt="Chicago" />
          <h1 className="image-text">CHICAGO</h1>
            <div className='box-text-container'>
          <p className='box-text'>Lorem ipsum dolor sir amet </p> <p className='box-text'> Ut wisi enim ad </p> <p className='box-text'> Duis autem vel eum</p> <p className="box-text-small">California EPA ></p>
          </div>
          </div>

            </div>
        </div>
        </StyledDiv>
      </>
  )
}

export default PoliciesInitiativesStatic
