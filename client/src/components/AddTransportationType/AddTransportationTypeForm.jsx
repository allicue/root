import React from 'react'
import styled from 'styled-components'

let Form = styled.form`
display: flex;
flex-flow: column nowrap;
align-items: center;
/* margin: 0 auto; */

label {
font-family: 'Monsterrat', sans serif;
color: #3d3d3d;
font-size: 24px;
font-weight: bold;
text-align: center;
margin: 36px 44px;
text-transform: uppercase;
}

input {
  width: 409px;
  height: 52px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  border-radius: 30px;
  border: solid 1px #3d3d3d;
  background-color: #ffffff;
  text-indent: 20px;
  box-shadow: 2px 2px 4px 1px #999;
}

textarea{
  width: 409px;
  height: 52px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  border-radius: 30px;
  border: solid 1px #3d3d3d;
  background-color: #ffffff;
  text-indent: 20px;
  box-shadow: 2px 2px 4px 1px #999;

}

textarea::placeholder {
  font-family: "Monsterrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #3d3d3d;
}

textarea::focus {
  font-family: "Monsterrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #3d3d3d;
}

input::placeholder {
  font-family: "Monsterrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #3d3d3d;
}

input:focus {
  outline: none;
}

div {
  margin: 20px auto;
}

  button {
  font-family: "Monsterrat", sans-serif;
  font-size: 24px;
  font-weight: bold;
  border: none;
  width: 311px;
  height: 66.5px;
  background-color: #749f5c;
  border-radius: 30px;
  font-size: 24px;
  text-align: center;
  color: white;
  margin: 15px;
  box-shadow: 2px 3px 4px 1px #999;
  /* margin: 0 auto; */
}


`

function AddTransportationTypeForm() {
  return (
        <Form>
      <div>      
      <label for="title">Title</label>
        <input type="text" name="title" placeholder="Walking" />
        </div>  
      <div>      
      <label for="imgURL">Image</label>
       <input type="text" name="imgURL" placeholder="Insert Image Link Here"/>
      </div>  
      <div>      
      <label for="description">Description</label>
       <textarea type="text" name="description" placeholder="Enter Description"/>
      </div>  
     <div>
      <button>SUBMIT</button>
      </div>
       </Form>

  )
}

export default AddTransportationTypeForm
