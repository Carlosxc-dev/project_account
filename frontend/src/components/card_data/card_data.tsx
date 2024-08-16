import { BiDollarCircle } from "react-icons/bi";
import { Data } from "./styled";
import { useEffect, useState } from "react";

interface Moneylender {
  name: string;
  option: boolean;
  value: number;
  pago: boolean;
  createdAt: string; // ou Date, dependendo de como está formatada a data
}

export default function DataComponent() {
  // Alterei o nome do componente para evitar conflito com o nome importado.
  const [moneys, setMoneys] = useState<Moneylender[]>([]); // Inicializa como um array vazio de Moneylender
  const userId = 2;
  async function listMoney() {
    await fetch("http://localhost:8080/home/list", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userId),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMoneys(res.data); // Armazena toda a lista de moneylenders no estado
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    listMoney();
  }, []);

  return (
    <Data>
      <div className="content">
        <p>Nome</p>
        <p>opcao</p>
        <p>Valor</p>
        <p>Data</p>
      </div>

      {moneys.map((money, index) => (
        <div key={index} className="content">
          <p>{money.name}</p>
          <p className={money.option == true ? "divida" : "emprestimo"}>
            {money.option}
          </p>
          <p>R$ {money.value},00</p>
          <p>{money.createdAt}</p>
        </div>
      ))}
    </Data>
  );
}
