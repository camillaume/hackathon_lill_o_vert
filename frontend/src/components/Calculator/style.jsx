import styled from "styled-components";

export default styled.section`
  section {
    background-color: rgba(201, 154, 125, 0.4);
    width: 25vw;
    aspect-ratio: 1/1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius:10px
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
    width: 9vw;
    aspect-ratio: 1/1;
    background-image: contain;
  }
  .hamburger {
    background-size: 7vw;
  }
  h2 {
    text-align: center;
    margin-top: 3px;
    font-weight: bold;
  }

  
  @media screen and (max-width: 700px) {
    section {
    width: 90vw;
    aspect-ratio: 1/1;
    margin-top:25px;
  }
  .ensemble {
    width: 30vw;
    aspect-ratio: 1/1;
    margin: 10px;
  }
  img {
    width: 30vw;
  }
`;
