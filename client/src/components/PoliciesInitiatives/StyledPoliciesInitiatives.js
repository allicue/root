import styled from "styled-components";

const StyledPoliciesInitiatives = styled.div`
  .top-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 33px;
  }
.wrapper{
  display: flex;
  flex-direction: column;
}
  a {
    text-decoration: none;
    color: #3d3d3d;
  }

  .top-left-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .title {
    display: flex;
    flex-direction: row;
  }

  .top-right-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: -80px;
    width: 91vw;
  }

  .input-container {
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
    background: url("https://svgur.com/i/R66.svg") no-repeat right -20px center;
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
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    color: #3d3d3d;
  }

  input:focus {
    outline: none;
  }

  .enter-location {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    color: #3d3d3d;
    margin-bottom: 5px;
  }

  .enter-location:hover {
    cursor: default;
  }

  .content-image {
    width: 288px;
    height: 256px;
    filter: contrast(70%) brightness(92%);
  }

  .content-image:hover {
    filter: contrast(90%) brightness(70%);
    cursor: pointer;
  }
  .box-text-container {
    width: 287px;
    height: 256px;
    background-color: #e8e4d9;
    padding-top: 1px;
    padding-bottom: 20px;
  }

  .box-text {
    font-family: "Montserrat", sans-serif;
    font-size: 21.5px;
    font-weight: 500;
    text-align: left;
    color: #3d3d3d;
    display: flex;
    margin: 29px 19px 29px 22px;
  }

  
  .box-text1 {
    font-family: "Montserrat", sans-serif;
    font-size: 21.5px;
    font-weight: 500;
    text-align: left;
    color: #3d3d3d;
    display: flex;
    margin: 25px 19px 15px 22px;
  }

  .box-text:hover {
    /* cursor: pointer; */
    /* transform: translate(0.5px); */
  }

  .box-text-small {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 500;
    font-style: italic;
    margin-left: 22px;
    color: #3d3d3d;
  }

  .box-text-small:hover {
    cursor: pointer;
    /* transform: translate(0.5px); */
  }

  .content-container {
    display: flex;
    flex-flow: row nowrap;
    margin: 16px 8px 16px 9px;
    object-fit: contain;
  }

  .image-text {
    position: absolute;
    font-family: "Montserrat", sans-serif;
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

    .box-text-container {
      display: none;
    }
    .top-right-container {
      margin: 0 auto;
      margin-top: 10px;
    }
    
    .root-logo{
      width: 400px;
    }
    .middle-container {
      display: flex;
      flex-flow: row nowrap;
      margin: 20px;
    }
  }

  @media screen and (max-width: 500px) {
    .title {
    display: flex;
    flex-direction: column;
  }
  .wrapper{
    display: flex;
    flex-direction: column-reverse;
}
  }

  @media screen and (max-width: 600px) {
  .content-image {
      max-width: 200px;
      max-height: 200px;
    }
    .image-text {
      font-size: 26px;
      font-weight: bold;
      text-align: center;
      color: #ffffff;
      width: 200px;
      height: 101px;
      margin-top: 95px;
    }
    .logo-title-container{
    display: inline-block;
    }
  
  }
`;

export default StyledPoliciesInitiatives;
