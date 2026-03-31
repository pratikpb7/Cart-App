import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  // const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
   
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">Cart App</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart {cart.length} </Link>
      </div>
    </div>
  );
}
