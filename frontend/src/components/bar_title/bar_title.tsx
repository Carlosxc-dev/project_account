import { Bar_title } from "./styled";

export default function card() {
  return (
    <Bar_title>
      <div className="aux">
        <p>Moneylender List</p>

        <button>ADD NEW</button>
      </div>

      <div className="line"></div>

      <div className="bar_info">
        <p>Nome</p>
        <p>Data</p>
        <p>Valor</p>
      </div>
    </Bar_title>
  );
}
