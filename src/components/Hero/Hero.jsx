import React from "react";
import "./Hero.css";
import heroBg from "../../assets/hero-bg.png";
import cart from "../../assets/cart.svg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay is purely visual, does NOT block clicks */}
      <div className="overlay"></div>

      {/* Hero content */}
      <div className="hero-content">
        <h1>Golfbasket Hoops – Where Golf Meets Basketball!</h1>
        <p>
          The ultimate fusion of precision and fun.
          <br />
          Play it. Love it. Own it.
        </p>
        <button className="cta">
          <img src={cart} alt="cart icon" className="cart-icon" />
          Pre-Order Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
