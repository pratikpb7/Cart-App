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
  const [selectedImage, setselectedImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getProductsByID(id).then((res) => {
      setProducts(res.data);
      setselectedImage(res.data.images[0]); // 🔥 first image
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
    alert("Cart Added");
  };

  if (!products) return <h2>Loading...</h2>;

  return (
    <div>
      <img src={selectedImage} width="300" />

      <div className="products-details">
        <div className="image-section">
       {products.images.map((img, i) => (
          <img
            key={i}
            src={img}
            width="60"
            onClick={() => setselectedImage(img)}
            style={{ cursor: "pointer", margin: "5px" }}
          />
        ))}
        </div>

        <div className="info-section">
          <p className="price">Price: ₹ {products.price}</p>
          <p className="discount">Discount: {products.discountPercentage}%</p>
          <p className="stock">Stock: {products.stock}</p>
          <p className="desc">{products.description}</p>
        </div>
        <div className="buttons">
          <button onClick={addtoCart}>Add to Cart</button>
          <button onClick={() => navigate("/cart")}>Proceed to cart</button>
          <button onClick={() => navigate("/")}>Add More Items</button>
        </div>
      </div>
    </div>
  );
}
