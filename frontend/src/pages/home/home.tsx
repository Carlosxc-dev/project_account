import { useRef, useState } from "react";
import { Conteiner, Form } from "./styled";
import { useNavigate } from "react-router-dom";

interface Idata {
  name: string;
  userName: string;
  password: string;
}

export default function home() {
  const nameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navegate = useNavigate();
  const [msg, setMsg] = useState("");

  const data: Idata = {
    name: nameRef.current?.value || "",
    userName: usernameRef.current?.value || "",
    password: passwordRef.current?.value || "",
  };

  function handleExit() {
    navegate("/");
  }

  async function handleAlter() {
    console.log(data);

    await fetch("http://localhost:8000/register", {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async function handleDelete() {
    console.log(data);

    await fetch("http://localhost:8000/register", {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message == "user delete sucess!!") {
          setMsg(res.message);
        } else {
          setMsg(res);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <Conteiner>
      <h1>home</h1>

      <h2>{msg}</h2>

      <Form onSubmit={handleAlter}>
        <h3>alterar user</h3>
        <label>Name</label>
        <input type="text" placeholder="Name" ref={nameRef} />
        <label>UserName</label>
        <input type="text" placeholder="userName" ref={usernameRef} />
        <label>Password</label>
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit">Alter</button>
      </Form>

      <Form onSubmit={handleDelete}>
        <h3>alterar user</h3>
        <label>Name</label>
        <input type="text" placeholder="Name" ref={nameRef} />
        <label>UserName</label>
        <input type="text" placeholder="userName" ref={usernameRef} />
        <label>Password</label>
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit">delete</button>
      </Form>

      <button className="btn" onClick={handleExit}>
        log out
      </button>
    </Conteiner>
  );
}
