import { IData } from "../interfaces/IData";

async function login(
  data: IData,
  setMsg: (message: string) => void,
  setUser: (userName: string) => void
) {
  try {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Converta a resposta para JSON
    const responseData = await response.json();

    if (response.ok) {
      // Acesse as propriedades do JSON
      setMsg("Login efetuado com sucesso");
      setUser(responseData.data.name); // Ajustado para acessar userName
    } else {
      setMsg("Usuário ou senha não encontrados");
    }
  } catch (error) {
    setMsg("Erro de rede. Verifique sua conexão e tente novamente.");
    console.error(error);
  }
}

export { login };
