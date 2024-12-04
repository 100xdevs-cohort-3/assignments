import { useRecoilValue } from "recoil";
import { orderTotalAtom } from "../recoil/atoms/orderSummaryAtoms";
import { Link } from "react-router-dom";

export default function CartIcon() {
  const summary = useRecoilValue(orderTotalAtom);
  return (
    <div
    style={{
      display: "flex",
      marginLeft: "auto",
      fontSize: "2rem",
      padding: 15,
    }}
    >
        Hello,user!
        <Link to="/cart">
        <i
          className="fa-solid fa-cart-shopping"
          style={{ color: "white", marginLeft: 10 }}
          ></i>
          </Link>
        <div
          style={{
            borderRadius: "50%",
            height: "1.5rem",
            width: "1.5rem",
            backgroundColor: "#F97315",
            color: "white",
            margin: -10,
            marginLeft: -13,
            fontSize: "1.1rem",
            textAlign: "center",
          }}
        >
          {summary.quantity}
        </div>
      </div>
  );
}
