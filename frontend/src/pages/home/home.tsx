import React, { useEffect, useRef } from "react";
import { Conteiner } from "./styled";

import { deleteUser } from "../../services/deleteUsers";
import { alterUsers } from "../../services/alterUsers";
import { listUsers } from "../../services/listUsers";

import { useGlobalContext } from "../../context/msg";
import { Outlet } from "react-router-dom";
import BarLat from "../../components/bar_lat/bar_lat";

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
  const { setMsg } = useGlobalContext();

  async function list() {
    listUsers(setMsg);
  }

  useEffect(() => {
    list();
  }, []);

  return (
    <Conteiner>
      <BarLat />

      <div className="board">
        <Outlet />
      </div>
    </Conteiner>
  );
}
