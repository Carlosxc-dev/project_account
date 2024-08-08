import React, { useEffect, useRef, useState } from "react";
import { Conteiner, Form, Bar_lat, Card, Bar_title, Data } from "./styled";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/profile.jpeg";
import { MdOutlineHome } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { BiDollarCircle } from "react-icons/bi";

interface Idata {
  name: string;
  userName: string;
  password: string;
}

export default function home() {
  const nameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameDel = useRef<HTMLInputElement>(null);
  const usernameDel = useRef<HTMLInputElement>(null);
  const passwordDel = useRef<HTMLInputElement>(null);
  const navegate = useNavigate();
  const [msg, setMsg] = useState("");
  const [data, setData] = useState<Idata[]>([]);

  function handleExit() {
    navegate("/");
  }

  async function handleAlter(e: React.FormEvent) {
    e.preventDefault();
    const data: Idata = {
      name: nameRef.current?.value || "",
      userName: usernameRef.current?.value || "",
      password: passwordRef.current?.value || "",
    };

    console.log(data);

    await fetch("http://localhost:8080/register", {
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
        if (res.message == "usuario update com sucesso") {
          setMsg(res.message);
        } else {
          setMsg(res);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async function handleDelete(e: React.FormEvent) {
    e.preventDefault();
    const data: Idata = {
      name: nameDel.current?.value || "",
      userName: usernameDel.current?.value || "",
      password: passwordDel.current?.value || "",
    };

    console.log(data);

    await fetch("http://localhost:8080/register", {
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

  async function list() {
    await fetch("http://localhost:8080/register", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    list();
  }, []);

  return (
    <Conteiner>
      <Bar_lat>
        <h1>
          <span>|</span> Moneylender
        </h1>

        <div className="profile">
          <img src={profile} alt="" />
          <h3>Carlos</h3>
          <p>admin</p>
        </div>

        <div className="conteiner_button">
          <button className="button active">
            <MdOutlineHome className="icon" />
            <p>Home</p>
          </button>
          <button className="button">
            <MdOutlineSettingsSuggest className="icon" />

            <p>setting</p>
          </button>
          <button className="button end">
            <IoIosLogOut className="icon" />

            <p>Log Out</p>
          </button>
        </div>
      </Bar_lat>
      <div className="board">
        <Card>
          <div className="card divida">
            <RiMoneyDollarBoxLine className="icon" />

            <h3>Payments</h3>
            <div className="value">
              <span>R$</span>500
            </div>
          </div>
          <div className="card credito">
            <BiDollarCircle className="icon" />
            <h3>buyments</h3>
            <div className="value">
              <span>R$</span>500
            </div>
          </div>
        </Card>

        <Bar_title>
          <div className="aux">
            <p>Moneylender List</p>

            <button>ADD NEW</button>
          </div>

          <div className="line"></div>

          <div className="bar_info">
            <p>Nome</p>
            <p>Data</p>
            <p>Valor</p>
          </div>
        </Bar_title>

        <Data>
          <div className="content">
            <BiDollarCircle className="icon" />
            <p>Nome</p>
            <p>Data</p>
            <p>Valor</p>
            <div>
              <button>Edit</button>
              <button>pago</button>
            </div>
          </div>
          <div className="content">
            <BiDollarCircle className="icon" />
            <p>Nome</p>
            <p>Data</p>
            <p>Valor</p>
            <div>
              <button>Edit</button>
              <button>pago</button>
            </div>
          </div>
          <div className="content">
            <BiDollarCircle className="icon" />
            <p>Nome</p>
            <p>Data</p>
            <p>Valor</p>
            <div>
              <button>Edit</button>
              <button>pago</button>
            </div>
          </div>
        </Data>
      </div>
    </Conteiner>
  );
}
