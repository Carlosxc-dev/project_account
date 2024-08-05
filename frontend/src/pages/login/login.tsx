import { useRef, useState } from "react";
import { Conteiner, Form } from "./styled";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface Idata {
  name: string;
  userName: string;
  password: string;
}

export default function Login() {
  const nameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [err, setErr] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data: Idata = {
      name: nameRef.current?.value || "",
      userName: usernameRef.current?.value || "",
      password: passwordRef.current?.value || "",
    };

    await fetch("http://localhost:8000/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          navigate("/home"); // Redireciona para a página inicial        }else{
        } else {
          setErr("Usuário ou senha não encontrados.");
        }
      })
      .catch((error) => {
        setErr("Erro de rede. Verifique sua conexão e tente novamente.");
        console.error(error);
      });
  };

  return (
    <Conteiner>
      <h1>Login to your account</h1>
      {err && <h2 style={{ color: "red" }}>{err}</h2>}
      <Form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          id="username"
          placeholder="UserName"
          ref={usernameRef}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <button type="submit">Login now</button>
      </Form>
      <span>
        Don't have an account? <Link to="/register">Create one</Link>
      </span>
    </Conteiner>
  );
}
