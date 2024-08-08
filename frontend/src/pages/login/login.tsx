import { useRef } from "react";
import { Conteiner, Form } from "./styled";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/login";
import { IData } from "../../interfaces/IData";
import { useGlobalContext } from "../../context/msg";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const nameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { msg, setMsg, setUser } = useGlobalContext();
  const { islogin } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data: IData = {
      name: nameRef.current?.value || "",
      userName: usernameRef.current?.value || "",
      password: passwordRef.current?.value || "",
    };

    login(data, setMsg, setUser);
    islogin();
    navigate("/home"); // Redireciona para a página inicial        }else{
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
