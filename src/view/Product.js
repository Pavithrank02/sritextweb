import React from "react";
import { ProductCards } from "../components/ProductCards";
import { BriqProductCard } from "../components/BriqProductCard";
import { AirBlowerCard } from "../components/AirBlowerCard";
import { BucketElevatorCard } from "../components/BucketElevatorCard";
// import { ScrewConveyorCard } from "../components/ScrewConveyorCard";
// import { LintSuperCleaningCard } from "../components/LintSuperCleaningCard";
// import { KappasPreCleaningCard } from "../components/KappasPreCleaningCard";
import { GinningAutomationCard } from "../components/GinningAutomationCard";
import { BeltConveyorCard } from "../components/BeltConveyorCard";

const Product = () => {
  return (
    <div>
      <ProductCards />
      <BriqProductCard />
      <AirBlowerCard />
      <GinningAutomationCard />
      <BeltConveyorCard />
      <BucketElevatorCard />
      {/* <ScrewConveyorCard />
      <LintSuperCleaningCard />
      <KappasPreCleaningCard /> */}
    </div>
  );
};

export default Product;
