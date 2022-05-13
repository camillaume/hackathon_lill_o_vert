import styled from "styled-components";

export default styled.div`
  height: 85vh;
  display: flex;
  background-color: var(--back-color);
  h2 {
    color: var(--color);
    font-size: 1.4rem;
    margin-top: 1.5rem;
    margin-right: 1rem;
    margin-left: 1rem;
    text-align: center;
    font-family: var(--font-family);
  }
  #bottom {
    margin-top: 0.2rem;
  }

  img {
    width: 100vw;
    margin: auto;
    margin-top: 2.15rem;
  }
  p {
    color: rgba(232, 225, 221);
    background-color: var(--main-color);
    font-family: var(--font-family);
    font-size: 1.2rem;
    height: 36vh;
  }
  .text {
    padding: 1.7rem 1.5rem;
    text-align: justify;
    line-height: 1.5rem;
  }
  .quote1,
  .quote2 {
    display: none;
  }

  .leaf {
    display: none;
  }

  @media screen and (min-width: 700px) {
    height: 75vh;
    .baseline {
      position: relative;
      width: 34em;
      margin: auto;
      margin-top: 3rem;
    }

    h2 {
      font-size: 2rem;
      margin: 0;
    }
    p {
      display: flex;
      align-items: flex-end;
    }

    .leaf {
      position: absolute;
      display: block;
      width: 3em;
      top: -50%;
      right: 7%;
      margin: 0 0 0 0;
    }

    source,
    .display {
      height: 100%;
      width: 100vw;
      background-color: var(--main-color);
    }

    .text {
      line-height: 1.7rem;
      font-size: 1.5rem;
      height: 18.5vh;
      padding-right: 6.5rem;
      padding-left: 6.5rem;
    }
  }
`;
