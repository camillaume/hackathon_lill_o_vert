import styled from "styled-components";

export default styled.section`
  section {
    background-color: var(--main-color);
    width: 25vw;
    aspect-ratio: 1/1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /* border: solid 0.5px red; */
  }

  .ensemble {
    display: flex;
    flex-direction: column;
    width: 10vw;
    aspect-ratio: 1/1;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 5px;
  }

  img {
    /* border: solid 0.5px blue; */
    width: 9vw;
    aspect-ratio: 1/1;
    background-image: contain;
  }
  .hamburger {
    background-size: 7vw;
  }
  h2 {
    /* border: solid 0.5px blue; */
    text-align: center;
    margin-top: 3px;
  }
`;
