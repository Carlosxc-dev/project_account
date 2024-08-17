import { Conteiner } from "./styled";

import { Outlet, useNavigate } from "react-router-dom";
import BarLat from "../../components/bar_lat/bar_lat";
import { useAuth } from "../../../../global/context/AuthContext";

export default function home() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    navigate("/");
  }

  return (
    <Conteiner>
      <BarLat />

      <div className="board">
        <Outlet />
      </div>
    </Conteiner>
  );
}
