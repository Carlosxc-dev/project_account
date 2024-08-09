import styled from "styled-components";

export const Bar_lat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 20%;
  height: 100vh;
  background-color: #acacac;

  h1 {
    color: #000;
    font-size: 1.8rem;
    margin-top: 2rem;
  }
  h1 > span {
    color: ${(props) => props.theme.colors.h1};
    font-weight: bold;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;
    margin: 3rem 0px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    h3 {
      margin-top: 0.5rem;
      color: #000;
    }

    p {
      margin-top: 0.5rem;
      color: ${(props) => props.theme.colors.h1};
    }
  }

  .conteiner_button {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1rem;
    width: 100%;
    height: 100%;
    position: relative;

    .end {
      position: absolute;
      bottom: 0px;
      margin-bottom: 1rem;
    }

    .active {
      background-color: ${(props) => props.theme.colors.background_button};
    }
  }

  .button,
  .conteiner_button > button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
    padding: 0.5rem;
    border-radius: 4px;
    color: #000;
    cursor: pointer;
    border: none;
    width: 80%;
    background-color: transparent;
    text-decoration: none;

    .icon {
      width: 20px;
      height: 20px;
      margin-right: 0.6rem;
    }
  }

  .button:hover {
    background-color: ${(props) => props.theme.colors.p};
  }
`;