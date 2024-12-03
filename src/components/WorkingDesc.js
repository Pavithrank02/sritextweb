import React from "react";

const WorkingDesc = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-16 bg-gray-50 dark:bg-gray-800">
      {/* Our Infrastructure Section */}
      <div className="w-10/12 mb-16">
        <p className="text-4xl font-extrabold text-green-500 mb-8 text-center">
          Our Infrastructure
        </p>
        <div className="flex flex-row items-center justify-between space-x-6">
          <div className="w-1/2 text-justify text-lg text-gray-800 dark:text-gray-200">
            We have a state-of-the-art manufacturing unit, which is spread over a
            vast area. Our production unit is equipped with all kinds of
            facilities required to undertake large-scale production. Being aware
            of the increasing competition, we have installed the latest machines
            in our unit, so that any kind of target can be fulfilled. Moreover,
            the research & development activities of our organization are
            undertaken to add new dimensions to the existing range of Machinery,
            Elevators, and Conveyors. We have a team of R&D experts, which conduct
            different types of research activities enabling us to enhance the
            quality of our existing range.
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/8/332893768/MV/XS/VA/2995798/img-1156-500x500.jpeg"
              alt="Infrastructure"
              className="h-72 w-[60] object-contain rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="w-10/12 mb-16">
        <p className="text-4xl font-extrabold text-green-500 mb-8 text-center">
          Why Us
        </p>
        <div className="flex flex-row items-center justify-between space-x-6">
          <div className="w-1/2 flex justify-center items-center">
            <img
              src="https://media.istockphoto.com/id/1639553609/photo/why-choose-us-symbol-concept-words-why-choose-us-on-wooden-blocks-business-and-why-choose-us.jpg?s=612x612&w=0&k=20&c=znNPjmDPfKyX24Belbpd_4aub3qvAr7kdJ5pSJI6Yq4="
              alt="Why Us"
              className="h-72 w-[100] object-contain rounded-md shadow-lg"
            />
          </div>
          <div className="w-1/2 text-justify text-lg text-gray-800 dark:text-gray-200">
            We have progressed immensely under the able guidance of our passionate
            professionals who hold years of experience in this domain. They helped
            us in taking tough challenges and attaining desired results. Owing to their
            constant motivation and support, we have acquired a respectable position.
          </div>
        </div>
      </div>

      {/* Client Satisfaction Section */}
      <div className="w-10/12 mb-16">
        <p className="text-4xl font-extrabold text-green-500 mb-8 text-center">
          Client Satisfaction
        </p>
        <div className="flex flex-row items-center justify-between space-x-6">
          <div className="w-1/2 text-justify text-lg text-gray-800 dark:text-gray-200">
            Being a client-centric organization, we ensure that every requirement of
            our customers is fulfilled. Our range of Industrial Machinery, Elevators,
            and Conveyors is offered to the clients at cost-effective rates. We also
            provide customized solutions to the clients so that they can fulfill their
            production targets. Owing to our ethical business practices and timely
            delivery schedules, we have attained immense market appreciation across
            the globe.
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img
              src="https://st3.depositphotos.com/3732989/14379/i/450/depositphotos_143792125-stock-photo-customer-satisfaction-scale-with-colored.jpg"
              alt="Client Satisfaction"
              className="h-72 w-[100] object-contain rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingDesc;