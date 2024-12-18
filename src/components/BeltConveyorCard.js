import { FocusCards } from "./ui/focus-cards.tsx";

export function BeltConveyorCard() {
  const cards = [
    {
      List: "Belt Conveyor System",
      products: [
        {
          title: "Flat Belt Conveyor",
          src: "https://images.squarespace-cdn.com/content/v1/54ff7cd3e4b0bc757625e06d/1484265999119-XUVJZYMD4V6TETXW97OT/Manufacturing+Plant",
          details: [
            ["Price", "₹ 18,000"],
            ["Material Handling Capacity", "	1-50 kg per feet"],
            ["Length", "10 - 120 feet"],
            ["Design", "Standard, Customized"],
            ["Type", "		Flexible Conveyors"],
            ["Voltage", "420 V"],
          ],
        },

        {
          title: "Material Handling Belt Conveyor",
          src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          details: [
            ["Price", "₹ 18,000/ Unit"],
            ["Belt Width", "12 - 40 inches"],
            ["Type", "General Purpose Belts"],
            ["Belt Material", "PU, PVC"],
            ["Condition", "New"],
            ["Voltage (Volt)", "	420 V"],
            ["Automation Grade", "Automatic"],
            ["Structure", "Belt Conveyor"],
            ["Customised", "	Yes"],
            ["Speed", "10 - 75 rpm"],
            ["Type Of Drive", "Chain or Belt"],
            ["Motor Type", "	Geared"],
            ["Speed Adjustable", "Yes"],
            ["Application", "Cotton and Match stick"],
            ["Length", "10 - 120 feet"],
            ["Material Handling Capacity", "1-50 kg per feet"],
          ],
        },
       
      ],
    },
  ];

  return <FocusCards cards={cards} size={3} width={"full"} />;
}
