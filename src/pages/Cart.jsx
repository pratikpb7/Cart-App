import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {

  const { cart,setCart } = useContext(CartContext);
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
  return <h2>Your cart is empty 🛒</h2>;
}

  return (
    <>
      {cart.map((item) => (
        <div key={item.id}>
           <img src={item.thumbnail} alt="" />
            <h3>{item.title}</h3>
            <p>Price:{item.price}</p>
            <p>Quantity:{item.quantity}</p>
            <button onClick={()=>increase(item.id)}>+</button>
             <button onClick={()=>decrease(item.id)}>-</button>
                          <button onClick={()=>remove(item.id)}>Delete</button>
                          <button onClick={placeOrder}>Place Order</button>



        </div>
      ))}
      <h2>Total Cart Price:{totalPrice}</h2>
    </>
  );
}
