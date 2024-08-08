import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;

  .board {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 80%;
    height: 100%;
    padding: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 0px 1.5rem;

  label {
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.secundary};
  }

  input {
    margin-top: 0.5rem;
    padding: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.text};
    border-radius: 8px;
    ::placeholder {
      color: ${(props) => props.theme.colors.color};
    }

    :invalid {
      border-color: red;
    }

    :valid {
      border-color: green;
    }

    :required {
      border-color: blue;
    }
  }

  input[type="text"]:focus {
    border: 2px solid ${(props) => props.theme.colors.primary};
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    border: none;
  }
`;

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

    .icon {
      width: 20px;
      height: 20px;
      margin-right: 0.6rem;
    }
  }

  .button:hover {
    background-color: ${(props) => props.theme.colors.label};
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 20px;

  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    width: 200px;
    color: #fff;
    font-size: ${(props) => props.theme.fonts.p};

    h3 {
      font-weight: 200;
    }

    .icon {
      width: 20px;
      height: 20px;
      margin-bottom: 0.5rem;
    }

    .value {
      align-self: flex-end;
      font-size: ${(props) => props.theme.fonts.h3};
      font-weight: ${(props) => props.theme.fonts.bold};
    }
  }

  .divida {
    background: linear-gradient(to right, #e92121 0%, #2c39a7 100%);
  }

  .credito {
    background: linear-gradient(to right, #fe0098 0%, #7c42f8 100%);
  }
`;
export const Bar_title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  .aux {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  p {
    color: #000;
    font-size: 1.5rem;
    margin: 1rem 0px;
    font-weight: bold;
  }

  button {
    padding: 0.5rem 2rem;
    background-color: ${(props) => props.theme.colors.background_button};
    border-radius: 4px;
    color: #fff;
    font-weight: ${(props) => props.theme.fonts.regular};
    cursor: pointer;
    border: none;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.label};
  }

  .bar_info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${(props) => props.theme.colors.label};
  }

  .bar_info > p {
    font-size: ${(props) => props.theme.fonts.p};
    font-weight: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.label};
  }
`;

export const Data = styled.div`
  width: 100%;

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 0px;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};

    .icon {
      width: 20px;
      height: 20px;
    }

    p {
      font-size: ${(props) => props.theme.fonts.p};
      color: #000;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      button {
        padding: 0.5rem 1rem;
        background-color: ${(props) => props.theme.colors.background_button};
        border-radius: 4px;
        color: #fff;
        font-weight: ${(props) => props.theme.fonts.regular};
        cursor: pointer;
        border: none;
      }
    }
  }
`;
