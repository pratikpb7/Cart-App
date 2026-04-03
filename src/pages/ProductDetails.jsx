import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { getProductsByID } from "../services/api";
import "./ProductDetails.css";
export default function productsDetails() {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const { cart, setCart } = useContext(CartContext);
  const [selectedImage, setSelectedImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getProductsByID(id).then((res) => {
      setProducts(res.data);
      setSelectedImage(res.data.images[0]);
    });
  }, [id]);

  const addtoCart = () => {
    const existing = cart.find((item) => item.id == products.id);
    if (existing) {
      const updatedCart = cart.map((item) =>
        item.id == products.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...products, quantity: 1 }]);
    }
    // navigate("/cart")
  };

  if (!products) return <h2>Please Wait...</h2>;

  return (
   <div className="details-container">
  <div className="details-card">

    {/* LEFT SIDE */}
    <div className="left">
      <img src={selectedImage} className="main-image" />

      <div className="thumbnail-row">
        {products.images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="thumb"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="right">
      <h2>{products.title}</h2>

      <p className="rating">
        {"⭐".repeat(Math.round(products.rating))}
        ({products.rating})
      </p>

      <h3 className="price">₹ {products.price}</h3>
      <p className="discount">{products.discountPercentage}% OFF</p>
      <p className="stock">Stock: {products.stock}</p>

      <p className="desc">{products.description}</p>

      <div className="btn">
        <button onClick={addtoCart}>Add to Cart</button>
        <button onClick={()=>navigate("/cart")} className="buy">Buy Now</button>
      </div>
    </div>

  </div>
</div>
    
  );
}
