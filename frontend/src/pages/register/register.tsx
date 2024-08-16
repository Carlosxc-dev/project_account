import React, { useRef } from "react";
import { Conteiner, Form } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/msg";

import { CreateUsers } from "../../services/createUsers";

export default function Register() {
  const nameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { msg, setMsg } = useGlobalContext();
  const navegate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = {
      name: nameRef.current?.value || "",
      email: usernameRef.current?.value || "",
      password: passwordRef.current?.value || "",
    };
    console.log(data);
    await CreateUsers(data, setMsg);
    navegate("/");
  }
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
