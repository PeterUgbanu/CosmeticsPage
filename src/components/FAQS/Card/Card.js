import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinus } from "react-icons/hi";
import "./Card.css";

const Card = ({ header, text }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  return (
    <div className="card">
      <div className="card-icon">
        {tooltipOpen ? (
          <HiOutlineMinus
            color="#FD5757"
            size={35}
            onClick={() => setTooltipOpen(false)}
          />
        ) : (
          <BsPlusLg size={27} onClick={() => setTooltipOpen(true)} />
        )}
      </div>
      <div className="card-content">
        <h4>{header}</h4>
        {tooltipOpen && <p>{text}</p>}
      </div>
    </div>
  );
};

export default Card;
