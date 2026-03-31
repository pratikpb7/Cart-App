import Home from "../pages/Home";
import "../App.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function productsCard({ products }) {
  const { cart, setCart } = useContext(CartContext);
  const addtoCart = () => {
    const existing = cart.find((item) => item.id == products.id);
    if (existing) {
      const updatedCart = cart.map((item) =>
        item.id == products.id ? { ...item, quantity: item.quantity + 1 } : item,
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...products, quantity: 1 }]);
    }
  };

  return (
    <div>
      <Link className="card-link" to={`/products/${products.id}`}>
        <img src={products.thumbnail} alt="" />
        <h3>{products.title}</h3>
        <p>Price :₹ {products.price}</p>
        <p>Discount: {products.discountPercentage}% OFF</p>
        <p>In stock : {products.stock}</p>
      </Link>

      <div>
      </div>
    </div>
  );
}
