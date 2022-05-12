import styled from "styled-components";

export default styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid red;
  box-sizing: border-box;
  background-color: var(--back-color);
  text-align: center;
  height: 85vh;
  width: auto;
  font-family: var(--font-family);

  h2 {
    font-weight: bold;
    font-size: 2rem;
  }

  p {
    margin: 5%;
    font-size: 1.2rem;
  }
  ul {
    text-align: center;
  }
  li {
    padding: 1%;
  }
  .baseline {
    font-weight: bold;
  }

  @media screen and (min-width: 700px) {
    border: 2px solid red;
    box-sizing: border-box;
    height: 75vh;

    p {
      margin: 2%;
    }
    ul {
      text-align: left;
    }
  }
`;
