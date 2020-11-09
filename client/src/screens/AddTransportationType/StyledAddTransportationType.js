import styled from "styled-components";

let StyledDiv = styled.div`
  a {
    text-decoration: none;
    color: #3d3d3d;
  }

  .title {
    width: 1000px;
  }
  .top-left-container {
    margin-left: -1.5vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  .top-right-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: -80px;
    width: 92vw;
  }

  .title {
    display: flex;
    flex-direction: row;
  }

  .root-logo {
    max-width: 518px;
    max-height: 212px;
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
    font-family: "Montserrat", sans-serif;
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
    font-family: "Montserrat", sans-serif;
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
    align-items: flex-end;
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

    .root-logo {
      width: 400px;
    }
    .middle-container {
      display: flex;
      flex-flow: row nowrap;
      margin: 20px;
    }
  }
  @media screen and (max-width: 600px) {
    .title{
      font-size: 25px;
      margin: 0 auto;
    }
  }
`;
export default StyledDiv;
