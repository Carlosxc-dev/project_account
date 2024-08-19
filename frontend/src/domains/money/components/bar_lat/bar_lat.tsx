import { Bar_lat } from "./styled";
import { IoIosLogOut } from "react-icons/io";
import profile from "../../../../assets/profile.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineHome, MdOutlineSettingsSuggest } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";

import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useSignOut from "react-auth-kit/hooks/useSignOut";

export default function BarLat() {
  const navegate = useNavigate();
  const auth: any = useAuthUser();
  const signOut = useSignOut();

  return (
    <Bar_lat>
      <h1>
        <span>|</span> Moneylender
      </h1>

      <div className="profile">
        <img src={profile} alt="" />
        <h3>{auth.name}</h3>
        <p>admin</p>
      </div>

      <div className="conteiner_button">
        <Link to="/home/dash" className="button active">
          <MdOutlineHome className="icon" />
          <p>Home</p>
        </Link>

        <Link to="/home/addMoney" className="button">
          <MdLibraryAdd className="icon" />
          <p>Add</p>
        </Link>

        <Link to="/home/settings" className="button">
          <MdOutlineSettingsSuggest className="icon" />
          <p>setting</p>
        </Link>

        <button
          className="button end"
          onClick={() => {
            signOut();
            navegate("/");
          }}
        >
          <IoIosLogOut className="icon" />
          <p>Log Out</p>
        </button>
      </div>
    </Bar_lat>
  );
}
