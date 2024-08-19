import { Conteiner } from "./styled";

import { Outlet } from "react-router-dom";
import BarLat from "../../components/bar_lat/bar_lat";

export default function home() {
  return (
    <Conteiner>
      <BarLat />

      <div className="board">
        <Outlet />
      </div>
    </Conteiner>
  );
}
