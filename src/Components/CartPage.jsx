import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../Redux/productsSlice";
import { toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css";
import "./Styles/CartPage.css";

const CartPage = () => {
  const cartItems = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    // Dispatch an action to clear the cart
    dispatch(clearCart());
    // Show a toast message indicating the cart has been cleared
    toast.success("Cart has been emptied!", {
      position: "top-center",
      autoClose: 3000, // Close the toast after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="container mt-4">
      <h1 className="cart-header"></h1>
      {cartItems.length > 0 ? (
        <div>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-total mb-5">
            <p>Total Quantity: &nbsp;&nbsp;&nbsp;&nbsp;{getTotalQuantity()}</p>
            <p>Total Amount: &nbsp;&nbsp;&nbsp;$&nbsp;{getTotalAmount()}</p>
            <button className="btn-checkout" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <p>Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
