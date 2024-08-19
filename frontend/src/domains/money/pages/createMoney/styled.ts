import styled from "styled-components";
import { ErrorMessage } from "formik";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }

  .form {
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
      border: 1px solid ${(props) => props.theme.colors.border};
      border-radius: 5px;
      ::placeholder {
        color: ${(props) => props.theme.colors.color};
      }
    }

    .radio_btn {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      margin-top: 1rem;

      label {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 0.5rem;
        color: ${(props) => props.theme.colors.secundary};

        input {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 0.5rem;
          width: 100%;
          height: 100%;
        }
      }
    }

    button {
      margin-top: 1rem;
      padding: 0.5rem;
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
      border: none;
    }

    .erro {
      color: red;
      font-size: 14px;
      margin-top: 4px;
    }
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;
