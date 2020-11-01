import styled from 'styled-components'

const Form = styled.form`
display: flex;
flex-flow: column nowrap;
align-items: center;
margin: 0 auto;

label {
font-family: 'Monsterrat', sans serif;
color: #3d3d3d;
font-size: 24px;
font-weight: bold;
text-align: center;
margin: 36px auto;
text-transform: uppercase;
position: relative;
}

.username{
  margin-right: 70px;
  left: 40px;
}

.image{
  margin-right: 130px;
  text-align: center;
  left: 100px;
}

.email-label {
right: 20px;
margin-left: 20px;
}

.password-label {
  margin-right: 85px;
  right: -60px;
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

::-moz-placeholder { 
    line-height:600px;
}
::-webkit-input-placeholder  {
    line-height:600px;
}
:-ms-input-placeholder {
    line-height:600px;
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
  margin: 20px;
  text-align: center;
}

  .create-button {
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
  box-shadow: 2px 2px 4px 1px #999;
}

.take-me-back {
  font-family: "Monsterrat", sans-serif;
  font-size: 24px;
  font-weight: bold;
  border: none;
  width: 311px;
  height: 66.5px;
  background-color: #fff;
  color: #759f5c;
  border-radius: 30px;
  font-size: 24px;
  text-align: center;
  margin: 15px;
  box-shadow: 2px 2px 4px 1px #999;
}

.description {
  margin-right: 10px;
}

.create-button:hover {
  cursor: pointer;
  box-shadow: 2px 3px 4px 1px #999;
  text-shadow: 2px 2px 5px rgb(54, 54, 54);
}
.take-me-back:hover{
  box-shadow: 2px 3px 4px 1px #999;
  text-shadow: 2px 2px 5px #999;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .image, .username, .email-label, .password-label{
    margin: 0 auto;
    left: 0;
    right: 0;
  }
}
`

export default Form