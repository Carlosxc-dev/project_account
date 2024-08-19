import { Data } from "./styled";
import { useEffect, useState } from "react";

import useAuthUser from "react-auth-kit/hooks/useAuthUser";

import { format } from "date-fns";

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
  const auth: any = useAuthUser();

  console.log(auth.userId, "id");

  async function handleSubmit() {
    try {
      const data = {
        userId: auth.userId,
      };
      const url = import.meta.env.VITE_API_LIST_MONEYS;
      console.log(data, "userid", url);

      const response = await fetch(url, {
        method: "POST",
        credentials: "include", // Garante que cookies de sessão sejam enviados
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const parseResp = await response.json();

      if (response.status === 200) {
        console.log(parseResp);
        // Itera sobre os itens e formata a data de cada um
        const formattedData = parseResp.data.map((item: any) => {
          return {
            ...item,
            createdAt: format(new Date(item.createdAt), "dd/MM/yyyy"),
          };
        });
        setMoneys(formattedData);
      } else {
        console.log("erro na resposta de listar moneys !!", parseResp.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleSubmit();
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
          <p className={money.option == true ? "emprestimo" : "divida"}>
            {money.option == true ? "credito" : "debito"}
          </p>
          <p>R$ {money.value},00</p>
          <p>{money.createdAt}</p>
        </div>
      ))}
    </Data>
  );
}
