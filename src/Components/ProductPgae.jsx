import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Row, Col, Carousel } from "react-bootstrap"; // Import Carousel component
import {
  selectAllProducts,
  selectCartItems,
  incrementQuantity,
  decrementQuantity,
  addToCart,
  removeFromCart,
} from "../Redux/productsSlice";
import "./Styles/ProductPage.css"; // Import the CSS file

const ProductPage = () => {
  const products = useSelector(selectAllProducts);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const [selectedQuantity, setSelectedQuantity] = useState({});

  const handleIncrement = (id) => {
    setSelectedQuantity({
      ...selectedQuantity,
      [id]: (selectedQuantity[id] || 0) + 1,
    });
  };

  const handleDecrement = (id) => {
    setSelectedQuantity({
      ...selectedQuantity,
      [id]: Math.max((selectedQuantity[id] || 0) - 1, 0),
    });
  };

  const handleAddToCart = (product) => {
    if (selectedQuantity[product.id] > 0) {
      dispatch(
        addToCart({ ...product, quantity: selectedQuantity[product.id] })
      );
      setSelectedQuantity({ ...selectedQuantity, [product.id]: 0 });
    }
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id, quantityToRemove: 1 }));
  };

  return (
    <div className="container align-items-center">
      <h1 className="mb-4"></h1>
      {products.map((product) => (
        <Row key={product.id} className="mb-4">
          <Col md={12}>
            <Card className="product-card">
              <Row className="g-0">
                <Col md={4}>
                  <Carousel>
                    {product.images.map((image, index) => (
                      <Carousel.Item key={index}>
                        <img
                          className="d-block w-100"
                          src={image}
                          alt={`Slide ${index}`}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <p className="card-text">
                      <span className="text-success fw-bold py-2">
                        {product.discountPercentage}% off
                      </span>{" "}
                    </p>
                    <Card.Text>Price: ${product.price}</Card.Text>
                    <p className="card-text">
                      <span className="badge bg-warning">
                        &nbsp;{product.rating}
                      </span>{" "}
                    </p>
                    <p className="card-text">
                      Stock: &nbsp;
                      <span className="badge bg-secondary py-2">
                        {product.stock}
                      </span>
                    </p>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <Button
                          variant="primary"
                          onClick={() => handleDecrement(product.id)}
                          className="btn-sm mr-2 btn-secondary btnQ"
                        >
                          -
                        </Button>
                        <span className="btnQt">
                          &nbsp;{selectedQuantity[product.id] || 0} &nbsp;
                        </span>
                        <Button
                          variant="primary"
                          onClick={() => handleIncrement(product.id)}
                          className="btn-sm ml-2 btn-secondary btnQ"
                        >
                          +
                        </Button>
                      </div>
                      <Button
                        variant="primary"
                        onClick={() => handleAddToCart(product)}
                        className="ml-2 btnAdd"
                      >
                        Add to Cart
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveFromCart(product.id)}
                        className="ml-2"
                      >
                        Remove from Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default ProductPage;
