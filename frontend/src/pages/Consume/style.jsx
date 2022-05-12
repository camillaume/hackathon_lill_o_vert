import styled from "styled-components";

export default styled.div`
  height: 85vh;
  .map {
    height: 30vh;
    border: 5px solid red;
  }

  @media screen and (min-width: 700px) {
    height: 75vh;
    .map {
      height: 30vh;
      border: 10px solid red;
    }
  }
`;
