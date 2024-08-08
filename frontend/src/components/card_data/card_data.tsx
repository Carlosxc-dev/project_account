import { BiDollarCircle } from "react-icons/bi";

import { Data } from "./styled";

export default function data() {
  return (
    <Data>
      <div className="content">
        <BiDollarCircle className="icon" />
        <p>Nome</p>
        <p>Data</p>
        <p>Valor</p>
        <div>
          <button>Edit</button>
          <button>pago</button>
        </div>
      </div>
      <div className="content">
        <BiDollarCircle className="icon" />
        <p>Nome</p>
        <p>Data</p>
        <p>Valor</p>
        <div>
          <button>Edit</button>
          <button>pago</button>
        </div>
      </div>
      <div className="content">
        <BiDollarCircle className="icon" />
        <p>Nome</p>
        <p>Data</p>
        <p>Valor</p>
        <div>
          <button>Edit</button>
          <button>pago</button>
        </div>
      </div>
    </Data>
  );
}
