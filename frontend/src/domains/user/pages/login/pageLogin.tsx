import { useRef } from "react";
import { Conteiner, Form } from "./styled";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/serviceLogin";
import { IUser } from "../../interfaces/IUser";
import { useGlobalContext } from "../../../../global/context/msg";
import { useAuth } from "../../../../global/context/AuthContext";

export default function Login() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { msg, setMsg, setUser, user } = useGlobalContext();
  const { islogin, setToken } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data: IUser = {
      email: usernameRef.current?.value || "",
      password: passwordRef.current?.value || "",
    };

    if (data.email === "" || data.password === "") {
      setMsg("Preencha todos os campos");
      return;
    }

    const status = await login(data, setMsg, setUser, setToken);

    if (status === 200) {
      navigate("/home"); // Redireciona para a página inicial
    } else {
      setMsg("Usuário ou senha não encontrados");
    }
  };

  return (
    <Conteiner>
      <div className="content">
        <h1>| Moneylender</h1>
        <h3>SIGN IN</h3>
        <p>Enter your credentials to access your account</p>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" placeholder="Email" ref={usernameRef} />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            ref={passwordRef}
          />
          {<p className="erro">{msg}</p>}
          <button type="submit">LOG IN</button>
        </Form>
        <span>
          Don't have an account? <Link to="/register">Log In</Link>
        </span>
      </div>
    </Conteiner>
  );
}
