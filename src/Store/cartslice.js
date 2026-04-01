import { createSlice, createSlice } from "@reduxjs/toolkit";

const createSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addtoCart:(state,action)
    }
})



// addtoCart:(state,action){
//     const existing = cart.find((item) => item.id == products.id);
//     if (existing) {
//       const updatedCart = cart.map((item) =>
//         item.id == products.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item,
//       );
//       setCart(updatedCart);
//     } else {
//       setCart([...cart, { ...products, quantity: 1 }]);
//     }

