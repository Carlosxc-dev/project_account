import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { BiDollarCircle } from "react-icons/bi";

import { Card } from "./styled";

export default function card() {
  return (
    <Card>
      <div className="card divida">
        <RiMoneyDollarBoxLine className="icon" />

        <h3>Payments</h3>
        <div className="value">
          <span>R$</span>500
        </div>
      </div>
      <div className="card credito">
        <BiDollarCircle className="icon" />
        <h3>buyments</h3>
        <div className="value">
          <span>R$</span>500
        </div>
      </div>
    </Card>
  );
}
