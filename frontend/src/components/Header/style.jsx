import styled from "styled-components";

export default styled.header`
  box-sizing: border-box;
  height: 15vh;
  background-color: var(--back-color);
  display: flex;

  .navigation {
    display: none;
  }
  img {
    display: block;
    margin: auto;
    width: 55vw;
  }
  .logo {
    margin: auto;
  }

  a {
    text-decoration: none;
  }

  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navigation {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .logo {
      margin-right: 2rem;
      margin-left: 1.5rem;
    }

    img {
      width: 17vw;
      margin-left: 1.5rem;
      margin-top: 0;
    }

    ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    li {
      color: var(--main-color);
      font-size: 1.7rem;
      margin-right: 2rem;
      margin-left: 1.5rem;
      width: 17vw;
      text-align: center;

      :hover {
        border-bottom: 5px solid var(--main-color);
      }
    }
  }
`;
