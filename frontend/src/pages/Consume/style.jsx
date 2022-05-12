import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  .mapMobile {
    display: flex;
    justify-content: center;
    border: 5px solid red;
  }
  .mapDesktop {
    display: none;
    border: 5px solid red;
  }
  p {
    border: 1px solid blue;
    max-width: 50vw;
    margin: auto;
    margin-top: 1rem;
  }

  @media screen and (min-width: 700px) {
    flex-direction: row;
    .mapDesktop {
      display: block;
      margin: auto;
    }
    .mapMobile {
      display: none;
    }
    p {
      max-width: 20vw;
      margin: 10%;
      font-size: 1.5rem;
    }
  }
`;
