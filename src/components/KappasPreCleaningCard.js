import { FocusCards } from "./ui/focus-cards.tsx";

export function KappasPreCleaningCard() {
  const cards = [
    {
      List: "Kappas Pre Cleaning Machine",
      products: [
       
        {
          title: "Kappas Pre Cleaning Machine",
          src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          details: [
            ["Price", "₹  3,00,000/ Unit"],
            ["Application", "Cotton Ginning Plant"],
            ["Frequency", "50/60 Hz"],
            ["Production Capacity", "	1 - 3 ton/hr"],
            ["Machine Type", "Automatic"],
            ["Brand", "		Sritex"],
            ["Power Consumption", "5 hp"],
            ["Voltage", "380V"],
            ["Material", "Mild Steel"],
          ],
        },
       
      ],
    },
  ];

  return <FocusCards cards={cards} size={3} width={"full"} />;
}
