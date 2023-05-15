import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Products from "./components/Products";
import Product from "./components/Product";
import DetailsEvent from './components/DetailsEvent';
import Panier from './components/Panier';


function App() {
  return (
    < >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/products/:category" element={<Product />} />
        <Route  path="/products/:id/DetailsEvent/:idEvent" element={<DetailsEvent />} />
        <Route exact path="/Panier" element={<Panier />} />
      </Routes>
    </>
  );
}

export default App;
