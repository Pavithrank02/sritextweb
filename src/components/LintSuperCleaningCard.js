import { FocusCards } from "./ui/focus-cards.tsx";

export function LintSuperCleaningCard() {
  const cards = [
    {
      List: "Lint Super Cleaning Machine",
      products: [
       
        {
          title: "Lint Super Cleaning Machine",
          src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          details: [
            ["Price", "₹  2,50,000/ Unit"],
            ["Frequency", "50/60 Hz"],
            ["Production Capacity", "	1 - 3 ton/hr"],
            ["Brand", "		Sritex"],
            ["Voltage", "380V"],
            ["Body Material", "Mild Steel"],
          ],
        },
       
      ],
    },
  ];

  return <FocusCards cards={cards} size={3} width={"full"} />;
}
