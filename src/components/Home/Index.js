import React from "react";
import About from "./index-components/About";
import Footer from "./index-components/Footer";
import Navbar from "./index-components/Navbar";
import Start from "./index-components/Start";
import Welcome from "./index-components/Welcome";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <About />
      <Start />
      <Footer />
    </div>
  );
};

export default Index;
