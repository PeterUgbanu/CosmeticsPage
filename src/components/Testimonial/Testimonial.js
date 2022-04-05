import React from "react";
import "./Testimonial.css";
import testimonial from "../../assets/testimonial.svg";

const Testimonial = () => {
  return (
    <div className="testimonial" id="about">
      <div className="testimonial-img">
        <img src={testimonial} alt="testimonial" />
      </div>
      <div className="testimonial-content">
        <p>Customer Story</p>
        <h2>Quick and best results. You are the best!</h2>
        <p>
          “If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </p>
        <p>There are many variations of passages of Lorem Ipsum available.”</p>
        <div>
          <h4>Dragos Gontariu</h4>
          <p>Mareting Manager</p>
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
