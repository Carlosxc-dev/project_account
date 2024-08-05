import { useRef } from "react";
import { Conteiner, Form } from "./styled";

interface Idata {
  name: string;
  username: string;
  password: string;
}

export default function login() {
  const nameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data: Idata = {
      name: nameRef.current?.value || "",
      username: usernameRef.current?.value || "",
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
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
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
        Don't have an account?? <a href="">Sign Up</a>
      </span>
    </Conteiner>
  );
}
