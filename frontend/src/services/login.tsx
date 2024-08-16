import { IData } from "../interfaces/IData";

async function login(
  data: IData,
  setMsg: (message: string) => void,
  setUser: (userName: string) => void
) {
  try {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      const userData = await response.json();
      setUser(userData);
      return response.status; // Retorna o status 200
    } else {
      const errorData = await response.json();
      setMsg(errorData.message || "Erro na autenticação");
      return response.status; // Retorna o status de erro
    }
  } catch (error) {
    setMsg("Erro de rede. Verifique sua conexão e tente novamente.");
    console.error(error);
  }
}

export { login };
