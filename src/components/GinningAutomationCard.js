import { FocusCards } from "./ui/focus-cards.tsx";

export function GinningAutomationCard() {
  const cards = [
    {
      List: "Ginning Automation Systems",
      products: [
        {
          title: "Cotton Ginning Machine",
          src: "https://images.squarespace-cdn.com/content/v1/54ff7cd3e4b0bc757625e06d/1484265999119-XUVJZYMD4V6TETXW97OT/Manufacturing+Plant",
          details: [
            ["Price", "Get Latest Price"],
            ["Usage/Application", "	sperate seed cotton"],
            ["Machine Type", "	Automatic"],
            ["Material", "metal"],
            ["Power Source", "		electricity"],
            ["Brand", "Sritex"],
            ["Country of Origin", "Made in India"],
          ],
        },

        
      ],
    },
  ];

  return <FocusCards cards={cards} size={3} width={"full"} />;
}
