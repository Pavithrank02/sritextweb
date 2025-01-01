import React from "react";

const Description = () => {
  return (
    <div className="flex flex-col items-center mt-28 w-full mb-5 px-4 sm:px-8">
      <div className="flex flex-col md:flex-col sm:flex-row justify-between items-center w-full sm:w-10/12 ">
        {/* Image Section */}
        <div className=" mb-4 sm:mb-0 sm:w-6/12">
          <img
            src="https://ik.imagekit.io/wratuu6c1/IMG_1089.JPEG?updatedAt=1735271418463"
            alt="aboutimg"
            className="  object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className=" md:w-10/12  flex flex-col justify-start items-center sm:items-center">
          <div className="font-bold text-4xl sm:text-5xl text-green-600 mb-4">
            <h1 className="font-extrabold text-center sm:text-left">
              About Sritex
            </h1>
          </div>
          <div className="text-justify text-sm w-full sm:w-11/12 items-center font-normal sm:text-lg ">
            Established in the year <span className="font-bold">2004</span>, we,{" "}
            <span className="font-bold">“Sritex Hi Tech Machines”, </span> are
            one of the prominent manufacturers and traders of a wide range of{" "}
            <span className="font-bold">
              Air Blower, Hydraulic Press Machine, Baling Press, Belt Conveyor,
              Bucket Elevator Belt and Conveyor Belt
            </span>
            . We are a partnership based venture. Our range is easy to operate
            and consume less amount of power. These products are offered to the
            clients in different sizes and specifications. Moreover, we have the
            required expertise to customize our range as per clients’ requirements.
            We also test our range using latest techniques, so that flawless range
            can be delivered to the clients. Owing to the superior quality of our
            range and customized solutions, we have attained immense market
            appreciation. In addition to this, we have a huge distribution network
            across India, which enable us to timely deliver our consignments. Our
            ethical business practice and transparency in dealings helped us in
            attaining maximum client satisfaction.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
