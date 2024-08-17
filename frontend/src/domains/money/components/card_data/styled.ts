import styled from "styled-components";

export const Data = styled.div`
  width: 100%;

  .bar_info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${(props) => props.theme.colors.label};
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    width: 100%;
    padding: 1rem 0px;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    gap: 1rem; /* Adicionado gap entre os itens */

    .icon {
      width: 20px;
      height: 20px;
    }

    .divida {
      color: red;
    }

    .emprestimo {
      color: green;
    }

    p {
      font-size: ${(props) => props.theme.fonts.p};
      color: #000;
    }
  }
`;
