import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route
            path="/"
            exact
            element={<Home cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
