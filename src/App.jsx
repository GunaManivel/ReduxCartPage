// App.js
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./Redux/Stroe"; // Corrected import path
import CartPage from "./Components/CartPage";
import ProductPage from "./Components/ProductPgae";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./Components/Styles/App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/" element={<ProductPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
