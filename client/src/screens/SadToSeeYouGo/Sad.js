import styled from "styled-components";

const StyledError = styled.div`
display: flex;
flex-direction: column;
font-family: 'Montserrat', sans serif;
color: #3d3d3d;
font-weight: bold;
text-align: center;
margin-bottom: 100px;

a {
  text-decoration: none;
  color: #749f5c;
  font-size: 36px;
  font-weight: normal;
  font-family: 'Montserrat', sans serif;
}

h1:hover{
  cursor: default;
}

.sad {
  color: #000000;
  margin-bottom: 23px;  
  font-size: 48px;
  text-transform: uppercase; 

}

.although{
  font-size: 24px;
  font-family: 'Montserrat', sans serif;
margin: 5px 20px 5px 20px;
}
span{
  color: #749f5c;
}
span:hover{
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: #749f5c;
  text-decoration-thickness: 2.2px;
}

a:hover{
  text-shadow: 1px 1px #999;
}

img {
  width: 360px;
  margin: 0 auto;
  padding: 50px;
}
`

export default StyledError;
