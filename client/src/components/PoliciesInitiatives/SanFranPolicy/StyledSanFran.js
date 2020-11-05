import styled from "styled-components";

const StyledSanFran = styled.div`
  

  a {
    text-decoration: none;
    color: #3d3d3d;
  }

.title{
  width: 1000px;
}
.top-left-container {
    margin-left: -1.5vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    display: flex;
    flex-direction: column;
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

  .in-works{
    display:none;
  }
  .get-involved{
    display: none;
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
    width: 1204px;
    height: 319px;
    max-width: 83.5vw 
  }

  .box-text-container {
    
    width: 1202px;
    height: 236px;
    max-height: 30vh;
    max-width: 83.5vw;
    background-color: #e8e4d9;
    padding-top: 1px;
    padding-bottom: 20px;
    align-items: center;
    overflow-y: scroll; 
  }

  .box-text {
    font-family: "Montserrat", sans-serif;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    color: black;
    margin: 40px 19px 40px 22px;
  }

  .box-text-title {
    font-family: "Montserrat", sans-serif;
    font-size: 27px;
    font-weight: bold;
    text-align: left;
    color: #3d3d3d;
    display: flex;
    margin: 29px 19px 29px 22px;
    text-transform: uppercase;
  }

  .box-text-title:hover {
    cursor: default;
  }

  .content-container {
    display: flex;
    flex-flow: column nowrap;
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
    flex-flow: column wrap;
    align-items: center;
    margin-top: 66px;
    margin-bottom: 118px;
    justify-content: center;
  }
  .box-text-mobile{
  display: none;
}
.mobile-image{
  display: none;
}
  @media screen and (max-width: 768px) {


    .content-image{
      max-width: 70vw;
      max-height: 200px;
    }
    .top-left-container {
      margin: 0 auto;
    }

    .root-logo{
      width: 400px;
    }

    .box-text-container {
      width: 70vw;
      max-height: 20vh;
      height: 20vh;
    }

    .box-text{
      margin-top: -20px;
    }

    .top-right-container {
      margin: 0 auto;
      margin-top: 10px;
    }

    .middle-container {
      display: flex;
      margin: 20px;
    }
      
  }
  @media screen and (max-width: 500px){
    .title {
    display: flex;
    flex-direction: column;
    width: 110vw;
          font-size: 38px;
          margin: 0 auto;
  }
  .in-works{
    display: flex;
    font-family: Montserrat, sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    border-bottom: 2px solid rgb(129, 161, 171);
    margin: 0 2rem;
  }

  .get-involved{
    display: flex;
    font-family: Montserrat, sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    border-bottom: 2px solid rgb(129, 161, 171);
    margin-right: auto;
    margin-left: 8px;
  }
  .mobile-image{
    display: flex;
    max-width: 4rem;
    max-height: 4rem;
    min-width: 4rem;
    min-height: 4rem;
    margin-right: 2px;
    margin-left: -10px;
    margin-top: 1.5rem;
  }



  .box-text-title{
    text-transform: capitalize;
    font-size: 15px;
    white-space: nowrap;
    margin: 5px auto;
  }

  .wrapper{
    display: flex;
    flex-direction: column-reverse;
}
.box-text-container{
  background: #fff;
  overflow-y: elipsis;
  flex-direction: row;
  overflow: initial;
  overflow-y: initial;
  margin-bottom: 20px;
  margin-left: 20px;
}
.box-text{
  display: none;
}
.box-text-mobile{
  display: flex;
  color: #3d3d3d;
  margin-top: 10px;
}

.content-container {
    display: flex;
    flex-flow: row nowrap;
    margin: 16px 19px 16px 19px;
  }
 
  .content-image{
    display: none;
  }
  .input-container{
    display: none;
  }
  }
`;

export default StyledSanFran;
