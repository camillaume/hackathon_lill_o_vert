import styled from "styled-components";

export default styled.section`
  width: 40vw;
  .ok {
    background-color: var(--main-color);
    margin-top: 1vh;
    color: white;
    border: none;
    width: 4vw;
    height: 4vh;
    border-radius: 5px;
    margin-left: 5px;
    :hover {
      background-color: var(--color);
    }
  }

  .nbKm {
    height: 3vh;
    border-radius: 5px;
    border-color: var(--main-color);
  }
  form {
    margin-bottom: 1vh;
  }
  .comparison {
    display: flex;
  }
  .images {
    display: flex;
    flex-direction: column;
  }
  img {
    height: 3.2vh;
    aspect-ratio: 1/1;
    margin: 0.25vw 0 0.25vw 0;
  }
  .vehicules {
    display: flex;
    flex-wrap: wrap;
    height: 3.2vh;
  }
  .vehicule {
    height: 3.2vh;
    margin: 0.25vw 0 0.25vw 0;
    display: flex;
    width: 40vw;
    flex-wrap: wrap;
    margin-left: 5px;
    align-items: center;
  }
  progress {
    margin-left: 2px;
    background: white;
  }
  progress[value] {
    width: 250px;
    height: 0.5vw;
    border-radius: 2px;
  }
  .resultText {
    margin-left: 2px;
    align-items: center;
  }
  p {
    font-style: italic;
    color: var(--color);
  }
  @media screen and (max-width: 700px) {
    width: 90vw;
    img {
      height: 3.2vh;
      margin-right: 1vw;
    }
    .vehicule {
      height: 3.2vh;
      margin: 0.25vw 0 0.25vw 0;
      width: 90vw;
    }
    progress[value] {
      width: 57vw;
      height: 2vw;
    }
    form {
      line-height: 3vh;
      text-align: center;
      margin-bottom: 2vh;
    }

    .ok {
      width: 10vw;
    }
  }
`;
