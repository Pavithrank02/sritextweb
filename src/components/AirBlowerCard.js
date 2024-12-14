import { FocusCards } from "./ui/focus-cards.tsx";

export function AirBlowerCard() {
  const cards = [
    {
      List: "Air Blower",
      products: [
        {
          title: "High Pressure Air Blower",
          src: "https://images.squarespace-cdn.com/content/v1/54ff7cd3e4b0bc757625e06d/1484265999119-XUVJZYMD4V6TETXW97OT/Manufacturing+Plant",
          details: [
            ["Price", " 1,50,000/ Unit"],
            ["Motor Rating", "	1 to 35 HP"],
            ["Power Source", "	Electric Blower"],
            ["Blower Type", "Centrifugal Blower"],
            ["Fan Speed", "		1000-2000 rpm, 2000-3000 rpm"],
          ],
        },

        {
          title: "Industrial Air Blower",
          src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          details: [
            ["Price", "₹ 1,50,000/ Unit"],
            ["Motor Rating", "1 to 35 HP"],
            ["Blower Type", "Centrifugal Blower"],
            ["Fan Speed", "1000-2000 rpm, 2000-3000 rpm"],
          ],
        },
        {
          title: "Centrifugal Air Blower",
          src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          details: [
            ["Price", "₹ 1,75,000/ Unit"],
            ["Power Source", "Electric Blower"],
            ["Pressure", "Medium Pressure"],
            ["Electric Current Type", "	AC"],
            ["Blade Material", "	Mild Steel"],
            ["Noise (dBA)", "		35 dBA"],
            ["Frequency (Hertz)", "	50"],
            ["Phase", "	3 phase"],
            ["Fan Speed (Rpm) ", "1440 to 2800 rpm"],
            ["Automation Grade", "	Manual"],
            ["Material", "	Steel"],
            ["Application", "	Cotton Industry, Match box industry"],
            ["Blower Type", "	Centrifugal Blower"],
            ["Power", "	1 to 35 HP"],
            ["Voltage", "	220-440 V"],

          ],
        },
      ],
    },
  ];

  return <FocusCards cards={cards} size={3} width={"full"} />;
}
