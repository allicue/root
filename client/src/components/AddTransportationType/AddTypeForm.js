import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-top: 103px;

  label {
    font-family: "Montserrat", sans serif;
    color: #3d3d3d;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin: 36px 44px;
    text-transform: uppercase;
  }

  button:focus {
    outline: none;
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

  textarea {
    width: 409px;
    height: 52px;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 500;
    border-radius: 30px;
    border: solid 1px #3d3d3d;
    background-color: #ffffff;
    padding-left: 40px;
    box-shadow: 2px 2px 4px 1px #999;
    resize: none;
    padding-top: 15px;
    padding-left: 20px;
  }

  ::-moz-placeholder {
    line-height: 600px;
  }
  ::-webkit-input-placeholder {
    line-height: 600px;
  }
  :-ms-input-placeholder {
    line-height: 600px;
  }

  textarea::placeholder {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    color: rgba(61, 61, 61, 0.4);
  }

  textarea:focus {
    outline: none;
  }

  input::placeholder {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    color: rgba(61, 61, 61, 0.4);
  }

  input:focus {
    outline: none;
  }

  div {
    margin: 20px auto;
    text-align: center;
  }

  button {
    font-family: "Montserrat", sans-serif;
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
  }

  .description {
    margin-right: -80px;
    position: relative;
    left: -90px;
    top: -15px;
  }

  button:hover {
    cursor: pointer;
    box-shadow: 2px 4px 4px 1px #999;
  }
`;

export default Form;
