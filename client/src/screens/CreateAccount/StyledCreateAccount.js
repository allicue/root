import styled from 'styled-components'

let StyledDiv = styled.div`
.top-container {
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
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
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-align: left;
  color: #3d3d3d;
  margin-left: 28px;
  font-size: 48px;
  width: 700px;
}

.title:hover {
  cursor: default;
}

.user-picture {

  background: red;
 width: 100px;
 height: 100px;
 border-radius: 50%;
 margin: 0 auto;
 margin-bottom: auto;
}
.middle-container {
  display: flex;
  /* flex-flow: row wrap; */
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
    /* margin-top: 33px; */
    margin: 0 auto;
  }

  .top-left-container {
    margin: 0 auto;
  }

  .box-text-container{
    display: none;
  }
  .top-right-container {
    margin: 0 auto;
    margin-top: 10px;
  }

  .middle-container {
    display: flex;  
    flex-flow: row nowrap;
    margin: 20px;
  }

  .root-logo{
    width: 400px;
  }
  .title{
    width:400px;
  }
}
`
export default StyledDiv