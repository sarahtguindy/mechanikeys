import React from "react";
import { Jumbotron } from "react-bootstrap";

const ProductJumbotron = () => {
  return (
    // <Carousel pause="hover" className="bg-dark">
    //   {products.map((product) => (
    //     <Carousel.Item key={product._id}>
    //         <Image src={product.image} alt={product.name} fluid />
    //         <Carousel.Caption className="carousel-caption">
    //           <h2>{product.name}</h2>
    //         </Carousel.Caption>
    //     </Carousel.Item>
    //   ))}
    // </Carousel>
    <Jumbotron style={{ backgroundSize: "cover" }}>
      <h1>MechaniKeys</h1>
      <p>Spice up your workstation with our mechanical keyboards.</p>
    </Jumbotron>
  );
};

export default ProductJumbotron;
