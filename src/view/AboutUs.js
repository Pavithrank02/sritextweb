import React from "react";
import Description from "../components/Description";
import FactTable from "../components/FactTable";
import { TeamCard } from "../components/TeamCard";
import { InfiniteMovingCardsDemo } from "../components/Testimony";

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
