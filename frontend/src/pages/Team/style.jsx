import styled from "styled-components";

export default styled.div`
  .team {
    border-radius: 10px;
    background-color: var(--back-color);
    font-family: var(--font-family);
    font-size: 0.65rem;
  }
  ul {
    height: 55vh;
    display: flex;
    justify-content: center;
    margin-left: 17%;
    margin-top: 2%;
  }
  .contact {
    color: var(--main-color);
  }
  .links {
    padding-top: 1vh;
    display: flex;
    justify-content: space-between;
  }
  .icon {
    aspect-ratio: 1/1;
  }
  .title {
    color: var(--color);
    font-family: var(--font-family);
    font-size: 2rem;
    height: 7vh;
    align-items: center;
    text-align: center;
    padding-top: 2vh;
  }
  @media screen and (max-width: 700px) {
    .team {
    }
    h2 {
      width: 100%;
      font-size: 1.3rem;
    }
    ul {
      flex-direction: column;
      padding-top: 1vh;
    }
    .contact {
      width: 90vw;
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-bottom: 1vh;
    }
    .links {
      width: 20vw;
    }
    .icon {
      width: 7vw;
    }
    .contact-container {
      margin-left: 5vw;
      margin-top: 5vh;
    }
  }
  @media screen and (min-width: 700px) {
    .team {
      font-size: 1.3rem;
    }
    ul {
      flex-wrap: wrap;
      padding-top: 5vh;
    }
    .contact {
      width: 25vw;
    }
    .links {
      width: 6vw;
    }
    .icon {
      width: 2.5vw;
    }
  }
`;
