import styled from "styled-components";

export default styled.section`
  width: 40vw;
  .comparison {
    display: flex;
  }
  .images {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 1.5vw;
    aspect-ratio: 1/1;
    margin: 0.25vw 0 0.25vw 0;
  }
  .vehicules {
    display: flex;
    flex-wrap: wrap;
    height: 2vw;
  }
  .vehicule {
    height: 2vw;
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
    height: 20px;
    height: 0.5vw;
    border-radius: 2px;
  }
  progress[max] {
    border-radius: 2px;
  }
  .resultText {
    margin-left: 2px;
    align-items: center;
  }
`;
