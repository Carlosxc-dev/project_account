import { IData } from "../interfaces/IData";

async function listUsers(setMsg: (message: string) => void) {
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
      setMsg(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

export { listUsers };
