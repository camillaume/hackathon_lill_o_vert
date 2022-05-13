import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-family);
  color: var(--color);
  h1 {
    padding-top: 0.5rem;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    margin-top: 1.5rem;
  }
  ul {
    max-width: 70vw;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 1rem;
  }
  li {
    padding: 0.3rem;
    font-size: 0.9rem;
    line-height: 1.5rem;
    text-align: justify;
  }
  .left {
    margin: 0.5rem;
    justify-content: center;
    height: 50vh;
  }
  .map {
    align-items: center;
    border: 0.15rem solid var(--color);
    border-radius: 10px;
    width: 99%;
    height: 100%;
  }
  .speach {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 700px) {
    flex-direction: row;
    h1 {
      padding-right: 6rem;
      font-weight: bold;
      font-size: 2rem;
      margin-top: 4rem;
    }
    ul {
      line-height: 1.7rem;
      max-width: 38vw;
      margin: 10%;
      margin-top: 5%;
    }
    li {
      padding: 0.5rem;
      font-size: 1.5rem;
    }
    .left {
      margin-top: 3rem;
      margin-left: 3rem;
      height: 58vh;
    }
    .map {
      border: 0.15rem solid var(--color);
      border-radius: 10px;
      width: 100%;
      height: 100%;
      display: block;
      margin: auto;
      width: 50vw;
    }
    .speach {
      width: 50vw;
    }
  }
`;
