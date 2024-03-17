import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../assets/azure-cart-high-resolution-logo-white-transparent.png";

const NavBar = () => {
  const cartItems = useSelector((state) => state.products.cart);

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div
      className="container-fluid navbar-dark sticky-top"
      style={{
        background: "#444444  ",
        fontFamily: "Bakbak One",
        fontSize: "22px",
      }}
    >
      <nav
        className="navbar navbar-expand-lg navbar-dark "
        style={{
          background: "#444444  ",
        }}
      >
        <div className="container-fluid">
          {/* Navbar Logo */}
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              alt="Navbar Logo"
              style={{ width: "100px", height: "auto" }}
            />
          </Link>
          {/* Right-side Items */}
          <div className="navbar-nav ml-auto">
            {/* Nav Links */}
            <div className="navbar-nav">
              <Link className="nav-link active" to="/">
                Products
              </Link>
              <Link className="nav-link active" to="/cart">
                Cart
              </Link>
            </div>
            {/* Cart Button */}
            <div className="nav-item">
              <span className="nav-link active">
                <button className="btn btn-outline-light" type="submit">
                  <i className="bi bi-cart-fill me-1"></i>
                  <span className="badge bg-dark text-info ms-1 rounded-pill">
                    {getTotalQuantity()}
                  </span>
                </button>
              </span>
            </div>
            {/* Price Tag Button */}
            <div className="nav-item">
              <span className="nav-link active">
                <button className="btn btn-outline-light" type="submit">
                  <i className="bi bi-tags-fill me-1"></i>
                  <span className="badge bg-dark text-info ms-1 rounded-pill">
                    ${getTotalAmount()}
                  </span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
