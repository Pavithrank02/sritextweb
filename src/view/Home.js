import React from "react";
import Slider from "../components/Slider.js";
import { FlipWordsDemo } from "../components/FlipWords.js";

import Ad from "../components/Ad.js";
import ProductSlider from "../components/ProductSlider.js";

const Home = () => {
  return (
    <div>
      <FlipWordsDemo />
      <Slider />
      <ProductSlider />
      <Ad />
    </div>
  );
};

export default Home;
