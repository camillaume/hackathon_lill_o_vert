import styled from "styled-components";

export default styled.div`
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
    //height: 27vh;
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
  quote2 {
    display: none;
  }

  .leaf {
    display: none;
  }

  @media screen and (min-width: 700px) {
    .baseline {
      position: relative;
      width: 35em;
      margin: auto;
      margin-top: 3rem;
    }

    h2 {
      font-size: 2rem;
      margin: 0;
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
      width: 100vw;
      background-color: var(--main-color);
    }
    display {
      position: relative;
    }
    .quote1 {
      display: block;
      height: 2rem;
      position: absolute;
      top: 72%;
      left: -45.5%;
    }

    .quote2 {
      display: block;
      height: 2rem;
      position: absolute;
      bottom: 10%;
      right: 3%;
      width: auto;
    }

    .text {
      line-height: 1.7rem;
      font-size: 1.5rem;
      height: 20vh;
      padding-right: 6.5rem;
      padding-left: 6.5rem;
    }
  }
`;
