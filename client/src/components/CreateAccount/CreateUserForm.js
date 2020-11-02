import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  margin: 0 auto;

  label {
    font-family: "Monsterrat", sans serif;
    color: #3d3d3d;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin: 36px auto;
    text-transform: uppercase;
    position: relative;
  }

  .username {
    margin-right: 10px;
    left: -20px;
  }

  .image {
    text-align: center;
    left: 100px;
  }

  .email-label {
    right: 20px;
  }

  .password-label {
    margin-right: -50px;
    left: -70px;
  }

  .zipcode-label {
    margin-right: -30px;
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
    font-family: "Monsterrat", sans-serif;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin-top: 81px;
  }

  span {
    color: #82a1ab;
  }
  span:hover {
    cursor: pointer;
  }
  .checkbox {
    width: 40px;
    border-radius: 5px;
    height: 36px;
    margin-right: 14px;
    align-items: center;
  }
  .checkbox:hover {
    cursor: pointer;
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
    margin-right: 30px;
  }

  .description {
    margin-right: 10px;
  }

  .create-button:hover {
    cursor: pointer;
    box-shadow: 2px 3px 4px 1px #999;
    text-shadow: 2px 2px 5px rgb(54, 54, 54);
  }
  .take-me-back:hover {
    box-shadow: 2px 3px 4px 1px #999;
    text-shadow: 2px 2px 5px #999;
    cursor: pointer;
  }
  .bottom-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    right: 30%;
    align-items: center;
  }

  /* label{
  margin-left: 50px;
} */

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
`;

export default Form;
