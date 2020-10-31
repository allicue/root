import styled from "styled-components";

const StyledError = styled.div`
display: flex;
flex-direction: column;
font-family: 'Monsterrat', sans serif;
color: #3d3d3d;
font-size: 24px;
font-weight: bold;
text-align: center;
margin: 36px auto;
text-transform: uppercase;

a {
  text-decoration: none;
  color: #749f5c;
  font-size: 36px;
  font-weight: normal;
  font-family: 'Monsterrat', sans serif;
}

h1:hover{
  cursor: default;
}

p {
  color: #000000;
  margin-bottom: 20px;  
}

a:hover{
  text-shadow: 1px 1px #999;
}

img {
  width: 200px;
  margin: 0 auto;
  padding: 50px;
}
`

export default StyledError;