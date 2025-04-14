import { HoverEffect } from "../components/ui/card-hover-effect.tsx";
import {
  IconAutomation,
  IconUserCode,
  IconCertificate,
  IconReportMoney,
  IconContract,
  IconDeviceImacCode,
} from "@tabler/icons-react";

export function TeamCard() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-green-700">
        Our Team
      </h1>
      <div className="text-justify w-full items-center font-medium text-base sm:text-lg md:text-xl mb-6">
        The immense progress of our organization is due to the consistent effort
        of our team members. Our organization has a team of expert
        professionals, who are the key in delivering high-quality products and
        services. They are continuously equipped with skills contributing to
        manufacturing process, quality control, Research and Development, Supply
        Chain Management etc. We constantly remember to keep collaboration,
        innovation, dedication to quality and focus on customers. Our Team
        comprises:
      </div>
      <HoverEffect items={projects} />
      <div className="text-justify w-full items-center font-medium text-base sm:text-lg md:text-xl mt-6">
        Moreover, we regularly conduct training sessions to ensure that our
        professionals stay up-to-date with the latest industry trends,
        technological advancements, and market shifts. These sessions are
        designed not only to enhance their existing skill sets but also to equip
        them with the knowledge and tools required to address emerging
        challenges and capitalize on new opportunities. By staying current with
        market developments, our team is better positioned to provide innovative
        solutions and deliver superior value to our clients. Our commitment to
        continuous learning and professional growth ensures that we maintain a
        competitive edge and consistently meet the evolving needs of the market.
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Engineers",
    description:
      "Engineers are experts in their fields, creating and innovating constantly. As practitioners of engineering, engineering professionals deal with complex systems, structures, devices, and materials to fulfill functional requirements while also considering the limitations imposed by regulation, safety, cost, and more.",
    link: "https://stripe.com",
    icons: (
      <IconUserCode className="h-12 w-12 sm:h-14 sm:w-14 mt-6 text-white " />
    ),
  },
  {
    title: "Technocrats",
    description:
      "Technocrats are individuals with technical training and occupations who perceive many important societal problems as being solvable with the applied use of technology and related applications.",
    link: "https://netflix.com",
    icons: (
      <IconContract className="h-12 w-12 sm:h-14 sm:w-14 mt-6 text-white " />
    ),
  },
  {
    title: "Quality controllers",
    description:
      "A quality control programme ensures that the completed products adhere to the intended quality standards and are error-free. Customers are more inclined to return and do business with the firm again when they obtain high-quality items that satisfy their expectations.",
    link: "https://google.com",
    icons: (
      <IconCertificate className="h-12 w-12 sm:h-14 sm:w-14 mt-6 text-white " />
    ),
  },
  {
    title: "R&D experts",
    description:
      "Research and development (R&D) is the series of activities that companies undertake to innovate. R&D is often the first stage in the development process that results in market research, product development, and product testing.",
    link: "https://meta.com",
    icons: (
      <IconAutomation className="h-12 w-12 sm:h-14 sm:w-14 mt-6 text-white " />
    ),
  },
  {
    title: "Sales & Marketing",
    description:
      "Eligible Business Employees primarily engaged in sales and marketing activities for or relating to the Business of the Company Group Entities.",
    link: "https://amazon.com",
    icons: (
      <IconReportMoney className="h-12 w-12 sm:h-14 sm:w-14 mt-6 text-white " />
    ),
  },
  {
    title: "Software Developers",
    description:
      "A develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
    icons: (
      <IconDeviceImacCode className="h-12 w-12 sm:h-14 sm:w-14 mt-6 text-white " />
    ),
  },
];
