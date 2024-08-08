import styled from "styled-components";

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
