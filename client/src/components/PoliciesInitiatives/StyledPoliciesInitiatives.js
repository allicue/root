import styled from "styled-components";

const StyledPoliciesInitiatives = styled.div`
  .top-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 33px;
  }

  .wrapper {
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
    cursor: default;
  }

  .content-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 288px;
    height: 256px;
    cursor: pointer;
  }

  #sf-image-container {
    background: linear-gradient(rgba(122, 121, 121, 0.4), rgba(122, 121, 121, 0.4)), url(https://i.imgur.com/XX7kg1z.png);
    background-size: cover;
    cursor: pointer;
  }
  
  #sf-image-container:hover {
    background: linear-gradient(rgba(80, 80, 80, 0.5), rgba(80, 80, 80, 0.5)), url(https://i.imgur.com/XX7kg1z.png);
    background-size: cover;
  }
  
  #la-image-container {
    background: linear-gradient(rgba(122, 121, 121, 0.4), rgba(122, 121, 121, 0.4)), url(https://i.imgur.com/WYjE0sv.jpg);
    background-size: cover;
    cursor: pointer;
  }

  #la-image-container:hover {
    background: linear-gradient(rgba(80, 80, 80, 0.3), rgba(80, 80, 80, 0.3)), url(https://i.imgur.com/WYjE0sv.jpg);
    background-size: cover;
  }

  #ny-image-container{
    background: linear-gradient(rgba(122, 121, 121, 0.3), rgba(122, 121, 121, 0.3)), url(https://i.imgur.com/x9wKRcK.jpg);
    background-size: cover;
    background-position-y: 45%;
}

  #ny-image-container:hover {
    background: linear-gradient(rgba(80, 80, 80, 0.3), rgba(80, 80, 80, 0.3)), url(https://i.imgur.com/x9wKRcK.jpg);
    background-size: cover;
    background-position-y: 45%;
}

  #seattle-image-container {
    background:  linear-gradient(rgba(122, 121, 121, 0.3), rgba(122, 121, 121, 0.3)), url(https://i.ibb.co/Rcy7c1S/seattle-citiypolicies-hi-res.png);
    background-size: cover;
  }

  #seattle-image-container:hover {
    background: linear-gradient(rgba(80, 80, 80, 0.3), rgba(80, 80, 80, 0.3)), url(https://i.ibb.co/Rcy7c1S/seattle-citiypolicies-hi-res.png);
    background-size: cover;
  }

  #chicago-image-container {
    background:  linear-gradient(rgba(122, 121, 121, 0.3), rgba(122, 121, 121, 0.3)), url(https://i.imgur.com/xiZTdOz.jpg); 
    background-size: cover;
  }

  #chicago-image-container:hover {
    background: linear-gradient(rgba(80, 80, 80, 0.3), rgba(80, 80, 80, 0.3)), url(https://i.imgur.com/xiZTdOz.jpg);
    background-size: cover;
  }

  #portland-image-container {
    background: linear-gradient(rgba(122, 121, 121, 0.3), rgba(122, 121, 121, 0.3)), url(https://i.imgur.com/Jvc4VTr.jpg);
    background-size: cover;
  }

  #portland-image-container:hover {
    background: linear-gradient(rgba(80, 80, 80, 0.3), rgba(80, 80, 80, 0.3)), url(https://i.imgur.com/Jvc4VTr.jpg);
    background-size: cover;
  }
  
  .content-image {
    width: 288px;
    height: 256px;
    filter: contrast(70%) brightness(92%);
  }

  .content-image-container:hover .content-image {
    filter: contrast(90%) brightness(70%);
    cursor: pointer;
  }

  .content-image-container:hover .content-image-text {
    cursor: pointer;
    transform: translate(0.7px);
    text-decoration: underline;
    text-decoration-thickness: 3px;
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

  .box-text-small {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 500;
    font-style: italic;
    margin-left: 22px;
    color: #3d3d3d;
    cursor: pointer;
  }

  .content-container {
    display: flex;
    flex-flow: row nowrap;
    margin: 16px 8px 16px 9px;
    object-fit: cover;
  }

  .image-text {
    font-family: "Montserrat", sans-serif;
    font-size: 27px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
  }

  .title-span,
  .title-span-short,
  .title-span-sf {
    z-index: 1;
  }

  .title-span:hover{
    cursor: pointer;
    max-width: 50%;
    position: relative;
  }

  .title-span-sf:hover,
  .title-span-ny:hover,
  .title-span-la:hover {
    cursor: pointer;
    max-width: 100%;
    position: relative;
  }

  .title-span:hover:after,
  .title-span-sf:hover:after,
  .title-span-la:hover:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 2rem;
    right: 2rem;
    top: 2.5rem;
    background: #fff;
    height: 0.3rem;
    border-radius: 10px;
    border-width: 50%;
  }

.title-span-ny:hover:after{
  content: "";
    position: absolute;
    bottom: 0;
    left: 2rem;
    right: 2rem;
    top: 2.5rem;
    background: #fff;
    height: 0.3rem;
    border-radius: 10px;
    border-width: 50%;
}

  .title-span-short:hover {
    cursor: pointer;
    max-width: 100%;
    position: relative;
  }

  .title-span-short:hover:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 2rem;
    right: 2rem;
    top: 2.5rem;
    background: #fff;
    height: 0.3rem;
    border-radius: 10px;
    border-width: 50%;
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

    .root-logo {
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

    .wrapper {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  @media screen and (max-width: 600px) {
    .content-image-container{
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
      margin-top: 75px;
    }

    #sf-image-text {
      margin-top: 35px;
    }

    .title-span:hover:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 2.5rem;
      right: -3.6rem;
      top: 8.5rem;
      background: #fff;
      height: 0.3rem;
      border-radius: 10px;
      border-width: 50%;
    }

    .title-span-sf:hover:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 3.5rem;
      right: 3rem;
      top: 6.5rem;
      height: 0.3rem;
      border-radius: 10px;
      border-width: 50%;
    }

    .title-span-la:hover:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 3.5rem;
      right: 3rem;
      top: 7rem;
      height: 0.3rem;
      border-radius: 10px;
      border-width: 50%;
    }

    .title-span-ny:hover:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 3.5rem;
      right: 3rem;
      top: 7rem;
      height: 0.3rem;
      border-radius: 10px;
      border-width: 50%;
    }

    .title-span-short:hover:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 4rem;
      right: 4rem;
      top: 7rem;
      height: 0.3rem;
      border-radius: 10px;
      border-width: 50%;
    }

    .logo-title-container {
      display: inline-block;
    }
  }
`;

export default StyledPoliciesInitiatives;
