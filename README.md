# Azure Cart - Online Shopping Platform

## Description

Azure Cart is an online shopping platform where users can browse through a variety of products and add them to their cart for purchase. This project is built using React for the frontend, with Redux for state management, and React Router for navigation. It provides features like viewing products, adding them to the cart, updating quantities, and checking out.

## Folder Structure

```diff
├── src
│ ├── Components
│ │ ├── NavBar.js
│ │ ├── Footer.js
│ │ ├── ProductPage.js
│ │ └── CartPage.js
│ ├── Redux
│ │ ├── store.js
│ │ └── productsSlice.js
│ ├── Styles
│ │ ├── App.css
│ │ ├── ProductPage.css
│ │ └── CartPage.css
│ ├── Assets
│ │ ├── Images
│ │ │ └── (product images)
│ │ └── Logo.png
│ ├── App.js
│ └── index.js
└── README.md
```

### Components

- **NavBar** : Displays the navigation bar with links to product pages and the cart.
  
- **Footer** : Displays the footer with copyright information.
  
- **ProductPage** : Renders the products available for purchase with options to add to cart or remove from cart.
  
- **CartPage** : Displays the items added to the cart with options to adjust quantities and proceed to checkout.
  
### Redux

- **Store** : Configures the Redux store with the products reducer.

- **ProductsSlice** : Defines the products slice for managing product state and cart state, including actions like adding to cart, removing from cart, and updating quantities.

### Styles

- **App.css** : Styles for the main application layout.

- **ProductPage.css** : Styles specific to the ProductPage component.

- **CartPage.css** : Styles specific to the CartPage component.

### Assets

- **Images** : Placeholder images for products.
  
- **Logo** : Logo for the navigation bar.
  
### Setup Instructions

1. Clone the repository to your local machine.
   
2. Navigate to the project directory.
   
3. Install dependencies using npm install.
   
4. Start the development server using npm start.
   
5. Access the application in your browser at http://localhost:3000.
   
### Additional Notes

- Ensure Redux and React Router dependencies are properly installed.
  
- Placeholder images are used for product thumbnails and carousel.
  
- Styling is provided using CSS, which can be further customized as needed.
  
### Contributors

[Your Name]

### License

This project is licensed under the MIT License.







