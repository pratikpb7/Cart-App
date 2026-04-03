import Home from "../pages/Home";
import "../App.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Productcard.css"

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
    <div className="card">
      <span className="discount-badge">
    {Math.round(products.discountPercentage)}% OFF
  </span>
      <Link className="card-link" to={`/products/${products.id}`}>
        <img src={products.thumbnail} alt="" />
       <h3 className="title">{products.title}</h3>

<p className="rating">
  {"⭐".repeat(Math.round(products.rating))}
  <span className="rating-number">({products.rating})</span>
</p>
        <h3 className="price">₹ {products.price} <span className="original">
    ₹ {Math.round(products.price / (1 - products.discountPercentage / 100))}
  </span></h3>
        
        {/* <p className="discount">Discount: {products.discountPercentage}% OFF</p>
        <p className="stock">In stock : {products.stock}</p> */}
      </Link>

      <div>
      </div>
    </div>
  );
}
