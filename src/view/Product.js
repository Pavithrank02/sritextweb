import React from "react";
import { ProductCards } from "../components/ProductCards";
import { BriqProductCard } from "../components/BriqProductCard";
import { AirBlowerCard } from "../components/AirBlowerCard";

const Product = () => {
  return (
    <div>
      <ProductCards />
      <BriqProductCard />
      <AirBlowerCard />
    </div>
  );
};

export default Product;
