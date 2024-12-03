import React from "react";
import TestimonyCard from "../components/TestimonyCard";
import Description from "../components/Description";
import FactTable from "../components/FactTable";
import { TeamCard } from "../components/TeamCard";
import Testimony, { InfiniteMovingCardsDemo } from "../components/Testimony";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";
import WorkingDesc from "../components/WorkingDesc";

const AboutUs = () => {
  return (
    <div>
      <Description />
      <FactTable />
      <TeamCard />
      <WorkingDesc />
      <InfiniteMovingCardsDemo />
    </div>
  );
};

export default AboutUs;
