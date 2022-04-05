import React from "react";
import Card from "./Card/Card";
import "./Faqs.css";

const Faqs = () => {
  const faqs = [
    {
      id: 1,
      header: "How long until we deliver your product.",
      body: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.",
    },
    {
      id: 2,
      header: "Do you offer money back guarentee?",
      body: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.",
    },
    {
      id: 3,
      header: "Is it medically tested?",
      body: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.",
    },
    {
      id: 4,
      header: "Do you ship out of Nigeria?",
      body: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.",
    },
    {
      id: 5,
      header: "How to get best results from this product?",
      body: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.",
    },
    {
      id: 6,
      header: "Do you ship out of United States?",
      body: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.",
    },
  ];
  return (
    <div className="faqs" id="faqs">
      <h1>Frequently Ask Questions</h1>
      <div className="faq">
        {faqs.map((faq) => (
          <Card key={faq.id} header={faq.header} text={faq.body} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
