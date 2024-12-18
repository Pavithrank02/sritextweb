import { FocusCards } from "./ui/focus-cards.tsx";

export function ScrewConveyorCard() {
  const cards = [
    {
      List: "Screw Conveyor",
      products: [
        {
          title: "Cotton Screw Conveyor",
          src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          details: [
            ["Price", "Get Latest Price"],
            ["Type", "Spiral"],
            ["Belt Material", "PU, PVC"],
            ["Condition", "New"],
            ["Voltage (Volt)", "	420 V"],
            ["Automation Grade", "Manual"],
            ["Orientation", "Horizontal"],
            ["Type Of Drive", "Chain or Belt"],
            ["Speed (Rpm)", "	40 - 70 rpm"],
            ["Application", "Cotton Ginning Plant"],
            ["Material Handling Capacity", "1-50 kg per feet"],
          ],
        },
      ],
    },
  ];

  return <FocusCards cards={cards} size={3} width={"full"} />;
}
