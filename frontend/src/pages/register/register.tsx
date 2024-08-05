import { useRef } from "react";
import { Conteiner, Form } from "./styled";
import { Link } from "react-router-dom";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data: Idata = {
      name: nameRef.current?.value || "",
      userName: usernameRef.current?.value || "",
      password: passwordRef.current?.value || "",
    };

    console.log(data);

    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        return <Home />;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Conteiner>
      <h1>Create an account</h1>
      <Form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder="Name" ref={nameRef} />
        <label>UserName</label>
        <input type="text" placeholder="UserName" ref={usernameRef} />
        <label>Password</label>
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit">Create Account</button>
      </Form>
      <span>
        Already have an account? <Link to="/login">Sing Up</Link>
      </span>
    </Conteiner>
  );
}
