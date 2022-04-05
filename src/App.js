import React from "react";
import Clients from "./components/Clients/Clients";
import Cta from "./components/CTA/Cta";
import Faqs from "./components/FAQS/Faqs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Testimonial from "./components/Testimonial/Testimonial";
import WhyUs from "./components/WhyUs/WhyUs";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <Products />
      <WhyUs />
      <Clients />
      <Testimonial />
      <Faqs />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
