import styled from "styled-components";

let StyledDiv = styled.div`
  .top-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #3d3d3d;
  }
  .top-left-container {
    margin-left: -40px;
    flex-direction: row;
  }

  .title {
    white-space: nowrap;
  }

  .picture-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    top: 38px;
    left: 50px;
    margin: 0 auto;
    margin-bottom: auto;
    padding-right: 10px;
    margin-right: 20px;
  }

  .user-picture {
    background: #c4c4c4;
    border: 2px solid #c4c4c4;
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  .user-picture:hover {
    cursor: pointer;
    background: #999;
    border: 2px solid #999;
    transform: scale(1);
  }

  .add-image {
    margin-top: 10px;
  }

  .add-image:hover {
    cursor: pointer;
  }

  .middle-container {
    display: flex;
    align-items: flex-end;
    margin-top: 106px;
    margin-bottom: 150px;
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
      margin: 0 auto;
    }

    .top-left-container {
      margin: 0 auto;
    }

    .top-right-container {
      margin: 0 auto;
      margin-top: -10px;
    }

    .middle-container {
      display: flex;
      flex-flow: column nowrap;
      margin: 20px;
      margin-bottom: 150px;
    }

    .root-logo {
      width: 400px;
    }
    .title {
      width: 400px;
      white-space: pre-wrap;
    }
  }

  @media screen and (max-width: 500px) {
    .title {
      width: 100vw;
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 1000px) {
    .top-container {
      display: flex;
      flex-flow: column wrap;
      left: 0;
    }

    .picture-container {
      margin: 0 auto;
      margin-bottom: 50px;
      left: 0%;
    }

    .middle-container {
      display: flex;
      flex-flow: column nowrap;
      margin: 20px;
      margin-bottom: 150px;
    }
  }
`;
export default StyledDiv;
