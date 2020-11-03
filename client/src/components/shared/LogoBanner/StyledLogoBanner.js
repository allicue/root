import styled from "styled-components";

const StyledLogoBanner = styled.div`
  a {
    text-decoration: none;
    color: #3d3d3d;
    width: 50px;
  }

  .top-left-container {
    margin-left: -40px;
  }

  .page-direction {
    padding: 20px;
    margin-top: 200px;
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    font-weight: bold;
    text-align: left;
    color: #3d3d3d;
    margin-left: 20px;
  }

  .page-direction:hover {
    cursor: default;
  }

  .title {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    text-align: left;
    color: #3d3d3d;
    margin-left: 28px;
    font-size: 48px;
    text-transform: uppercase;
  }

  .title:hover {
    cursor: default;
  }

  .root-logo {
    max-width: 518px;
    max-height: 212px;
  }

  img:hover {
    cursor: pointer;
  }

  .logo-title-container {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 7.5vw;
  }

  @media screen and (max-width: 500px) {
    .title {
      text-transform: capitalize;
      background-color: #e8e4d9;
      width: 100%;
      font-weight: normal;
      font-size: 24px;
      text-align: center;
      padding: 20px;
    }
    .root-logo {
      display: none;
    }
    .page-direction {
      display: none;
    }
    .logo-title-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-left: -6vw;
      margin-top: 60px;
      margin-bottom: 15px;
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    .top-left-container {
      margin: 0 auto;
    }
  }
`;

export default StyledLogoBanner;
