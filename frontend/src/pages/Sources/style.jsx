import styled from "styled-components";

export default styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: var(--back-color);
  text-align: center;
  height: 85vh;
  width: auto;
  font-family: var(--font-family);
  color: var(--color);

  h1 {
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
    box-sizing: border-box;
    height: 75vh;

    p {
      margin: 2%;
      font-size: 1.6rem;
    }
    ul {
      text-align: left;
      font-size: 1.4rem;
    }
  }
`;
