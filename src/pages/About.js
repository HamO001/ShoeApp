import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to Shoe Hub, where passion for footwear meets innovation. We are dedicated to providing you with the latest trends in shoes that not only elevate your style but also enhance your comfort and performance.

At Shoe Hub, we believe that every step counts. That's why we meticulously curate our collection to offer a diverse range of shoes designed to cater to your lifestyle needs. Whether you're looking for sleek urban sneakers, high-performance running shoes, or timeless classics, our selection ensures there's something for everyone.

Our journey began with a simple mission: to create footwear that blends cutting-edge technology with timeless craftsmanship. Each pair of shoes is crafted with precision and care, using high-quality materials that prioritize durability and comfort. From innovative cushioning systems to sustainable practices, we strive to exceed expectations in every step.

Beyond our commitment to quality, we are passionate about community and sustainability. We actively engage in initiatives that support local artisans and promote eco-friendly practices throughout our supply chain. With every purchase, you're not just investing in a pair of shoes; you're contributing to a greater cause.

Join us in our quest to redefine footwear. Whether you're exploring the city streets or chasing your next adventure, trust Shoe Hub to be your partner every step of the way.

Discover the perfect blend of style, comfort, and performance with Shoe Hub.


        </p>
      </div>
    </div>
  );
}

export default About;