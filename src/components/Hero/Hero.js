import React from "react";
import "./Hero.css";
import { BsStarFill } from "react-icons/bs";
import delivery from "../../assets/delivery-man.png";
import group2 from "../../assets/Group2.svg";
import group3 from "../../assets/Group3.svg";
import iconLeft from "../../assets/IconLeft.svg";
import iconRight from "../../assets/IconRight.svg";

const Hero = () => {
  return (
    <div className="hero-container">
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-content__free-delivery">
            <p>Free delivery worldwide</p>
            <div>
              <img src={delivery} alt="free delivery" />
            </div>
          </div>
          <h1 className="hero-content__header">Foundation Matte & Poreless</h1>
          <p className="hero-content__text">
            Maybelline’s #1 foundation perfect for oily skin. No stickiness, no
            shine.
          </p>
          <div className="hero-content__action">
            <button>Add to Cart</button>
            <div>
              <img src={group2} alt="how it works" />
              <p>How It Works</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div>
            <img src={group3} alt="hero banner" />
          </div>
          <div className="hero-card">
            <div>
              <div className="rating-card">
                <p>Details</p>
                <h2>$100.45</h2>
                <h3>30mL</h3>
                <BsStarFill color="#E79331" />
                <BsStarFill color="#E79331" />
                <BsStarFill color="#E79331" />
                <BsStarFill color="#E79331" />
                <BsStarFill color="#000" />
              </div>
              <button>
                <img src={iconLeft} alt="previous" />
                <hr />
                <img src={iconRight} alt="next" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
