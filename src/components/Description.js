import React from "react";

const Description = () => {
  return (
    <div className="flex flex-col items-center mt-28 w-full mb-5">
      <div className="flex flex-row justify-between w-10/12 ">
        <div className="w-1/2 h-full">
          <img
            src="https://images.squarespace-cdn.com/content/v1/54ff7cd3e4b0bc757625e06d/1484265999119-XUVJZYMD4V6TETXW97OT/Manufacturing+Plant"
            alt="aboutimg"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-evenly items-center">
          <div className="font-bold text-5xl text-green-600">
            <h1 className=" font-extrabold mb-4 text-center">
              About Sritex
            </h1>
          </div>
          <div className="text-justify w-11/12 items-center font-normal text-xl">
            Established in the year <span className="font-bold">2004</span>, we, <span className="font-bold">“Sritex Hi Tech Machines”, </span> are one
            of the prominent manufacturers and traders of a wide range of <span className="font-bold">Air
            Blower, Hydraulic Press Machine, Baling Press, Belt Conveyor, Bucket
            Elevator Belt and Conveyor Belt</span>. We are a partnership based venture.
            Our range is easy to operate and consume less amount of power. These
            products are offered to the clients in different sizes and
            specifications. Moreover, we have the required expertise to
            customize our range as per clients’ requirements. We also test our
            range using latest techniques, so that flawless range can be
            delivered to the clients. Owing to the superior quality of our range
            and customized solutions, we have attained immense market
            appreciation. In addition to this, we have a huge distribution
            network across India, which enable us to timely deliver our
            consignments. Our ethical business practice and transparency in
            dealings helped us in attaining maximum client satisfaction.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
