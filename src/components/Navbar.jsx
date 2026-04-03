import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar({ setSearch }) {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar">
      <Link className="nav-logo" to="/">
        E-Commerce.in
      </Link>

     
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />
    

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart">
          🛒{totalItems > 0 && <span className="badge">{totalItems}</span>}
        </Link>
      </div>
    </div>
  );
}
