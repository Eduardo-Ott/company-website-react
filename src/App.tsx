import React from "react";
import Cards from "./components/Cards";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";


function App() {
    return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  )
}

export default App;