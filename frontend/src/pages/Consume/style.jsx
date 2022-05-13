import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--back-color);
  font-family: var(--font-family);
  color: var(--color);
  h1 {
    padding-top: 0.5rem;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
  }
  ul {
    max-width: 70vw;
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
      box-sizing: border-box;
      display: flex;
      align-items: flex-end;
      padding-left: 2%;
      text-align: left;
      width: 100%;
      height: 20%;
      font-weight: bold;
      font-size: 2rem;
    }
    ul {
      box-sizing: border-box;
      line-height: 1.7rem;
      width: 100%;
      height: 80%;
      padding: 2%;
      padding-right: 8%;
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
      box-sizing: border-box;
      width: 50vw;
    }
  }
`;
