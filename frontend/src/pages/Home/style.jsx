import styled from "styled-components";

export default styled.div`
  display: flex;
  background-color: #dedede;
  h2 {
    color: var(--color);
    font-size: 1.3rem;
    margin: 1.5rem 1rem;
    text-align: center;
  }

  img {
    width: 100%;
    height: 27vh;
  }
  p {
    color: rgba(232, 225, 221);
    background-color: var(--main-color);
  }
  .text {
    padding: 1.7rem 1rem;
    height: 33vh;
    text-align: justify;
    line-height: 1.3rem;
  }
  .quote {
    display: none;
  }
  @media screen and (min-width: 700px) {
    h2 {
      margin-top: 6rem;
      font-size: 2.8rem;
    }
    img {
      width: 100%;
      height: 21vh;
    }
    /* .display {
      display: flex;
      align-items: center;
      height: 21vh;
    } */
    .quote {
      display: inline;
      font-size: 5rem;
    }

    .text {
      line-height: 1.7rem;
      font-size: 1.5rem;
      height: 20vh;
    }
  }
`;
