// redux/productsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/1/1.jpg",
      images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
      ],
      quantity: 0,
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://images.unsplash.com/photo-1515054562254-30a1b0ebe227?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        "https://images.unsplash.com/photo-1515054562254-30a1b0ebe227?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1516245556508-7d60d4ff0f39?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1509741102003-ca64bfe5f069?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1541096017664-085dd9a616c3?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      quantity: 0,
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/3/1.jpg",
      images: ["https://cdn.dummyjson.com/product-images/3/1.jpg"],
      quantity: 0,
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/4/1.jpg",
      images: [
        "https://cdn.dummyjson.com/product-images/4/1.jpg",
        "https://cdn.dummyjson.com/product-images/4/2.jpg",
        "https://cdn.dummyjson.com/product-images/4/3.jpg",
        "https://cdn.dummyjson.com/product-images/4/4.jpg",
        "https://cdn.dummyjson.com/product-images/4/1.jpg",
      ],
      quantity: 0,
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/5/1.jpg",
      images: [
        "https://cdn.dummyjson.com/product-images/5/1.jpg",
        "https://cdn.dummyjson.com/product-images/5/2.jpg",
        "https://cdn.dummyjson.com/product-images/5/3.jpg",
      ],
      quantity: 0,
    },
  ],
  cart: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const index = state.cart.findIndex((item) => item.id === id);
      if (index !== -1) {
        // If item already exists in cart, update its quantity
        state.cart[index].quantity += quantity;
      } else {
        // Otherwise, add it to cart
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const { id, quantityToRemove } = action.payload;
      const itemIndex = state.cart.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        const item = state.cart[itemIndex];
        if (item.quantity <= quantityToRemove) {
          // Remove the entire item if the quantity to remove is greater or equal to the item's quantity
          state.cart.splice(itemIndex, 1);
        } else {
          // Decrement the quantity by the specified amount
          item.quantity -= quantityToRemove;
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const selectAllProducts = (state) => state.products.products;
export const selectCartItems = (state) => state.products.cart;

export const {
  incrementQuantity,
  decrementQuantity,
  addToCart,
  removeFromCart,
  clearCart,
} = productsSlice.actions;

export default productsSlice.reducer;
