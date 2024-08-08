import { IData } from "../interfaces/IData";

async function alterUsers(data: IData, setMsg: (message: string) => void) {
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

export { alterUsers };
