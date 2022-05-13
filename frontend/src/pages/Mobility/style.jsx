import styled from "styled-components";

export default styled.section`
  font-family: var(--font-family);
  

  .mobility {
    width: 80vw;
    height: 75vh;
    margin: auto;
    padding: 2vh 0 1vh 0;
  }
  .components {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .explications {
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 5vh;
    color: var(--color);
    line-height: 4vh;
    font-weight: bold;
  }

  @media screen and (max-width: 700px) {
    .mobility {
    width: 90vw;
  }
    .components {
      width: 90vw;
      display: flex;
      flex-direction:column;
  }
  .explications{
    color:var(--main-color);
  }
`;
