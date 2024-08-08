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

    await fetch("http://localhost:8080/login", {
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
          setErr("Usuário ou senha não encontrados");
        }
      })
      .catch((error) => {
        setErr("Erro de rede. Verifique sua conexão e tente novamente.");
        console.error(error);
      });
  };

  return (
    <Conteiner>
      <div className="content">
        <h1>| Moneylender</h1>
        <h3>SIGN IN</h3>
        <p>Enter your credentials to access your account</p>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            id="username"
            placeholder="Email"
            ref={usernameRef}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            ref={passwordRef}
          />
          {err && <p className="erro">{err}</p>}
          <button type="submit">LOG IN</button>
        </Form>
        <span>
          Don't have an account? <Link to="/register">Log In</Link>
        </span>
      </div>
    </Conteiner>
  );
}
