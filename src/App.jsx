import Approutes from "./routes/Approutes";
import Navbar from "./components/Navbar";
import { useState } from "react";
export default function App() {
   const [search, setSearch] = useState(""); 
  return (
    <>
      <Navbar search={search}setSearch={setSearch} />
      <Approutes search={search} />
      
    </>
  );
}
