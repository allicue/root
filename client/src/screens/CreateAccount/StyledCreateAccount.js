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

.picture-container{
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  top: 40px;
  left: 50px;
  margin: 0 auto;
  margin-bottom: auto;
  padding-right: 10px;
  margin-right: 20px;
}

  .user-picture {
  background: #c4c4c4;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  }

  .user-picture:hover{
    cursor: pointer;
  }

/* .add-image {
text-align: center;
font-family: 'Monsterrat', sans-serif;
color: #3d3d3d;
width: 200px;
margin-top: 125px;
margin-left: -145px;
font-size: 24px;
font-weight: 500;
 margin-bottom: auto;
} */

.add-image:hover{
  cursor: pointer;
  text-shadow: 1px 2px #999;
}

.middle-container {
  display: flex;
  /* flex-flow: row wrap; */
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
    /* margin-top: 33px; */
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

  .root-logo{
    width: 400px;
  }
  .title{
    width:400px;
  }
}

@media screen and (max-width: 1000px) {
  .top-container {
    display: flex;
    flex-flow: column wrap;
    left: 0;
    /* margin-top: 33px; */
  }
  .logo-title-container{
  }
.picture-container{
margin:0 auto;
margin-bottom: 50px;
left: 0%;
}


  .top-left-container {

    }

  .middle-container {
    display: flex;  
    flex-flow: column nowrap;
    margin: 20px;
    margin-bottom: 150px;

  }

  
  
}
`
export default StyledDiv