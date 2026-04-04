import { useContext, useState,useEffect } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css"
import { useNavigate } from "react-router-dom";

export default function Cart() {
 


  const { cart,setCart } = useContext(CartContext);
   
  const navigate=useNavigate()
  useEffect(() => {
  if (cart.length === 0) {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }
}, [cart]);
  const totalPrice = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
const [orderPlaced,setOrderPlaced]=useState(false)

const placeOrder=()=>{
    setCart([])
        setOrderPlaced(true)
    
}

const increase=(id)=>{
    const updated=cart.map((item)=>item.id==id ? {...item,quantity:item.quantity+1}:item)
    setCart(updated)
}

const decrease=(id)=>{
    const updated=cart.map((item)=>item.id==id ? {...item,quantity:item.quantity-1}:item).filter((item)=>item.quantity>0)
    setCart(updated)
}

const remove=(id)=>{
    const updated=cart.filter((item)=>item.id!==id)
    setCart(updated)
}
if (orderPlaced) {
  return <h2>Order placed successfully 🎉</h2>;
}
if (cart.length === 0) {
  return <h2 className="cart-h2">Your cart is empty 🛒</h2>;
}

  // return (
//     <>
//       {/* {cart.map((item) => (
//         <div key={item.id}>
//            <img src={item.thumbnail} alt="" />
//             <h3>{item.title}</h3>
//             <p>Price:{item.price}</p>
//             <p>Quantity:{item.quantity}</p>
//             <button onClick={()=>increase(item.id)}>+</button>
//              <button onClick={()=>decrease(item.id)}>-</button>
//                           <button onClick={()=>remove(item.id)}>Delete</button>
                          
//                           <button onClick={placeOrder}>Place Order</button> */}



//         </div>
//       ))}
//       <h2>Total Cart Price:{totalPrice}</h2>
//     </>
//   );
// }
return (
  <div className="cart-container">
    {cart.length==0 &&  navigate("/")}
    
    <div className="cart-items">
      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          
          <img src={item.thumbnail} alt={item.title} />

          <div className="details">
            <h3>{item.title}</h3>
            <p>₹ {item.price}</p>

            <div className="qty">
              <button  disabled={item.quantity <= 1} onClick={()=>decrease(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={()=>increase(item.id)}>+</button>
            </div>

            <button onClick={()=>remove(item.id)} className="remove">Remove</button>
          </div>

        </div>
      ))}
    </div>

    <div className="summary">
      <h2>Total: ₹ {totalPrice}</h2>
      <button className="checkout">Checkout</button>
    </div>

  </div>
)}