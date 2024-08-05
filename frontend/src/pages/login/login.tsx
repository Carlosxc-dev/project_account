import { useRef, useState } from "react";
import { Conteiner, Form } from "./styled";
import { Link } from "react-router-dom";
import Home from "../home/home";

interface Idata {
  name: string;
  userName: string;
  password: string;
}

export default function login() {
  const nameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loged, setLoged] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data: Idata = {
      name: nameRef.current?.value || "",
      userName: usernameRef.current?.value || "",
      password: passwordRef.current?.value || "",
    };

    console.log(data);

    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLoged(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return loged ? (
    <Home />
  ) : (
    <Conteiner>
      <h1>Login to your account</h1>
      <Form action="">
        <label htmlFor="">UserName</label>
        <input type="text" placeholder="UserName" ref={usernameRef} />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit" onClick={handleSubmit}>
          Login now
        </button>
      </Form>
      <span>
        Don't have an account?? <Link to="/">create</Link>
      </span>
    </Conteiner>
  );
}
