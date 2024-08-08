import { IData } from "../interfaces/IData";

const CreateUsers = async (data: IData, setMsg: (message: string) => void) => {
  try {
    const res = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.message === "User already exists") {
      setMsg(result.message);
    }

    if (result.errors) {
      setMsg(result.errors[0].message);
    }
  } catch (err) {
    console.error(err);
  }
};

export { CreateUsers };
