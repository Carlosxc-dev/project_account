import { Bar_lat } from "./styled";
import { IoIosLogOut } from "react-icons/io";
import profile from "../../../../assets/profile.jpeg";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineHome, MdOutlineSettingsSuggest } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";

import avatar01 from "../../../../assets/avatar01.jpg";
import avatar02 from "../../../../assets/avatar02.jpg";
import avatar03 from "../../../../assets/avatar03.jpg";

import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useSignOut from "react-auth-kit/hooks/useSignOut";

export default function BarLat() {
  const navegate = useNavigate();
  const auth: any = useAuthUser();
  const signOut = useSignOut();

  const avatars = [avatar01, avatar02, avatar03];

  return (
    <Bar_lat>
      <h1>
        <span>|</span> Moneylender
      </h1>

      <div className="profile">
        <img
          src={avatars[Math.floor(Math.random() * avatars.length)]}
          alt="avatar porfile"
        />
        <h3>{auth.name}</h3>
      </div>

      <div className="conteiner_button">
        <Link to="/home/dash" className="button active">
          <MdOutlineHome className="icon" />
          <p>Home</p>
        </Link>

        <Link to="/home/addMoney" className="button">
          <IoIosAddCircleOutline className="icon" />
          <p>Add New</p>
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
