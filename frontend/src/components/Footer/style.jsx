import styled from "styled-components";

export default styled.footer`
  display: none;
  box-sizing: border-box;
  border: 5px solid black;
  height: 10vh;

  @media screen and (min-width: 700px) {
    display: block;
  }
`;
