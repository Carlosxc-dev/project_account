import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  h1 {
    margin-bottom: 1rem;
  }

  span {
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.text};
    a {
      color: #1570ef;
      text-decoration: none;
    }
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
