import styled from "styled-components";

const StyledButton = styled.button`
width: 100px;
height: 30px;
margin: 20px 20px;
border: 2px black solid;
border-radius: 5px;
 &:hover,
  &:focus {
    color: blue;
  }
  &:active {
    color: red;
  }
`

export default StyledButton;