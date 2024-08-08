import { useRef, useState } from "react";
import { Conteiner, Form } from "./styled";
import { Link, useNavigate } from "react-router-dom";

import Home from "../home/home";

interface Idata {
  name: string;
  userName: string;
  password: string;
}

export default function Register() {
  const nameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navegate = useNavigate();
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data: Idata = {
      name: nameRef.current?.value || "",
      userName: usernameRef.current?.value || "",
      password: passwordRef.current?.value || "",
    };

    console.log(data);

    await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message == "User already exists") {
          return setMsg(res.message);
        }
        if (res.erros) {
          return setMsg(res.erros[0].message);
        }
        console.log(res);
        navegate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Conteiner>
      <div className="content">
        <h1>| Moneylender</h1>
        <h3>LOG IN</h3>
        <p>Enter your credentials to create your account</p>
        <Form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" placeholder="Name" ref={nameRef} />
          <label>UserName</label>
          <input type="text" placeholder="UserName" ref={usernameRef} />
          <label>Password</label>
          <input type="password" placeholder="Password" ref={passwordRef} />
          <p>{msg}</p>
          <button type="submit">LOG IN</button>
        </Form>
        <span>
          Already have an account? <Link to="/">Sing In</Link>
        </span>
      </div>
    </Conteiner>
  );
}
