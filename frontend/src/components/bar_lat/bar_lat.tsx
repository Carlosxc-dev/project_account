import { Bar_lat } from "./styled";
import { IoIosLogOut } from "react-icons/io";
import profile from "../../assets/profile.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineHome, MdOutlineSettingsSuggest } from "react-icons/md";
import { useAuth } from "../../context/AuthContext";
import { useGlobalContext } from "../../context/msg";

export default function BarLat() {
  const navegate = useNavigate();
  const { logout } = useAuth();
  const { user } = useGlobalContext();

  console.log(user, "usersfagjeaspf");

  function handleExit() {
    logout();
    navegate("/");
  }
  return (
    <Bar_lat>
      <h1>
        <span>|</span> Moneylender
      </h1>

      <div className="profile">
        <img src={profile} alt="" />
        <h3>{user}</h3>
        <p>admin</p>
      </div>

      <div className="conteiner_button">
        <Link to="/home/dash" className="button active">
          <MdOutlineHome className="icon" />
          <p>Home</p>
        </Link>

        <Link to="/home/settings" className="button">
          <MdOutlineSettingsSuggest className="icon" />
          <p>setting</p>
        </Link>

        <button className="button end" onClick={handleExit}>
          <IoIosLogOut className="icon" />
          <p>Log Out</p>
        </button>
      </div>
    </Bar_lat>
  );
}
