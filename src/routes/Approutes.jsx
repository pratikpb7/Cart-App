import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import App from "../App";

export default function Approutes({search}) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home search={search} />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
      </Routes>
    </>
  );
}
