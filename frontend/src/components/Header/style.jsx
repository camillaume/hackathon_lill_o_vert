import styled from "styled-components";

export default styled.header`
  box-sizing: border-box;
  height: 15vh;
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
    font-family: var(--font-family);
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
      font-size: 1.5rem;
      margin-right: 2rem;
      margin-left: 1.5rem;
      width: 17vw;
      text-align: center;
      font-family: var(--font-family);

      :hover {
        border-bottom: 5px solid var(--main-color);
        margin-bottom: -2rem;
        padding-bottom: 1.8rem;
      }
    }
  }
`;
