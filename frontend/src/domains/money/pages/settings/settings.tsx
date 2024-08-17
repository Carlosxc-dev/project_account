import { Conteiner } from "./styled";
import { deleteUser } from "../../services/deleteUsers";
import { useGlobalContext } from "../../../../global/context/msg";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navegate = useNavigate();
  const { user, setMsg } = useGlobalContext();

  function deletee() {
    console.log(user);

    deleteUser(user, setMsg);
    //navegate("/");
  }

  function alterr() {
    const { user, setMsg } = useGlobalContext();
    deleteUser(user, setMsg);
  }

  return (
    <Conteiner>
      <h1>Settings</h1>

      <h3>Alter User</h3>
      <form action="" onSubmit={alterr}>
        <label htmlFor="">
          Name:
          <input type="text" placeholder="Name" />
        </label>
        <label htmlFor="">
          Password:
          <input type="password" placeholder="Password" />
        </label>
        <button>Alter</button>
      </form>

      <h3>Delete User</h3>
      <p>This action is inversible</p>
      <button onClick={deletee}>Delete</button>
    </Conteiner>
  );
}
