import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  margin: 0 auto;

  label {
    font-family: "Montserrat", sans serif;
    color: #3d3d3d;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin: 36px auto;
    text-transform: uppercase;
    position: relative;
  }

  .picture-container {
    margin: 0 auto;
    margin-bottom: 50px;
    left: 0%;
  }

  .username {
    margin-right: 20px;
    left: -20px;
  }

  .image {
    text-align: center;
    left: 100px;
  }

  .email-label {
    right: 20px;
    margin-right: 20px;
  }

  .password-label {
    margin-right: -50px;
    left: -70px;
  }

  .image-label {
    margin-right: 20px;
    left: -15px;
  }

  .zipcode-label {
    margin-right: -20px;
    left: -50px;
  }

  .account-input {
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
    line-height: 600px;
  }
  ::-webkit-input-placeholder {
    line-height: 600px;
  }
  :-ms-input-placeholder {
    line-height: 600px;
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
    margin: 20px;
    text-align: center;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    position: relative;
    right: -10%;
  }
  .terms-of-service {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin-top: 81px;
  }

  .already {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }

  .terms,
  .login {
    color: #82a1ab;
  }

  .terms:hover,
  .login:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: #82a1ab;
    text-decoration-thickness: 0.099rem;
  }

  .checkbox:not(:checked),
  .checkbox:checked {
    position: absolute;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-progress-appearance: none;
    -o-appearance: none;
  }

  .checkbox:invalid {
    margin-top: 30px;
    position: absolute;
    margin-left: 15px;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-progress-appearance: none;
    -o-appearance: none;
  }

  .checkbox:not(:checked) + label,
  .checkbox:checked + label {
    position: relative;
    padding-left: 1.95em;
    cursor: pointer;
  }

  .checkbox:not(:checked) + label:before,
  .checkbox:checked + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 32px;
    height: 26px;
    border: 1px solid #000;
    border-radius: 5px;
  }

  .checkbox:not(:checked) + label:after,
  .checkbox:checked + label:after {
    content: "✔";
    left: 5px;
    bottom: 2px;
    position: absolute;
    color: #759f5c;
  }

  .checkbox:not(:checked) + label:after {
    opacity: 0;
  }

  .checkbox:checked + label:after {
    opacity: 1;
  }

  .create-button {
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
    box-shadow: 2px 2px 4px 1px #999;
    text-transform: uppercase;
  }

  .take-me-back {
    font-family: "Montserrat", sans-serif;
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
    margin-right: 30px;
  }

  .description {
    margin-right: 10px;
  }

  .create-button:hover {
    cursor: pointer;
    box-shadow: 2px 3px 4px 1px #999;
    transform: scale(1.005);
  }
  .take-me-back:hover {
    box-shadow: 2px 3px 4px 1px #999;
    cursor: pointer;
    transform: scale(1.005);
  }
  .bottom-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    right: 30%;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    .image,
    .username,
    .email-label,
    .password-label,
    .zipcode-label {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      left: 0;
      right: 0;
    }

    .account-input {
      width: 60vw;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      margin-top: 20px;
      right: 0%;
      outline: none;
    }

    .bottom-container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      left: 0;
    }
  }

  @media screen and (max-width: 1000px) {
    div {
      margin: 20px auto;
    }

    .bottom-container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      right: 4.6%;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 500px) {
    .account-input {
      background-color: rgba(196, 196, 196, 0.8);
      border: none;
      box-shadow: none;
    }

    .image,
    .username,
    .email-label,
    .password-label,
    .zipcode-label,
    .image-label {
      display: none;
    }

    .take-me-back {
      display: none;
    }
    .create-button {
      box-shadow: none;
      text-transform: capitalize;
    }
  }
`;

export default Form;
