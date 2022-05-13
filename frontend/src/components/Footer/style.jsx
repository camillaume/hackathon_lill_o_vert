import styled from "styled-components";

export default styled.footer`
  display: none;
  box-sizing: border-box;
  height: 10vh;

  @media screen and (min-width: 700px) {
    height: 10vh;
    background-color: var(--main-color);
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    li {
      font-size: 2rem;
      color: rgba(232, 225, 221);
      margin-right: 3rem;
    }
    a {
      text-decoration: none;
    }
  }
`;
