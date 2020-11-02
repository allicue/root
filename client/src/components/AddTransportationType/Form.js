import styled from 'styled-components'

const Form = styled.form`
display: flex;
flex-flow: column nowrap;
align-items: center;
/* margin: 0 auto; */
margin-top: 40px;

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
  /* text-indent: 40px; */
  padding-left: 40px;
  box-shadow: 2px 2px 4px 1px #999;
  resize: none;
  padding: 10px;
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

textarea::placeholder {
  font-family: "Monsterrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #3d3d3d;
}

textarea:focus {
  outline: none;
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
  text-align: center;
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
}

.description {
  margin-right: 10px;
}
button:hover {
  cursor: pointer;
  text-shadow: 2px 2px #999;
  transform: translateY(-1.004px);
  box-shadow: 2px 4px 4px 1px #999;

}
`

export default Form