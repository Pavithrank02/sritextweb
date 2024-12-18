import { FocusCards } from "./ui/focus-cards.tsx";

export function BucketElevatorCard() {
  const cards = [
    {
      List: "Bucket Elevator System",
      products: [
        {
          title: "Get Latest Price",
          src: "https://images.squarespace-cdn.com/content/v1/54ff7cd3e4b0bc757625e06d/1484265999119-XUVJZYMD4V6TETXW97OT/Manufacturing+Plant",
          details: [
            ["Price", "₹ 18,000"],
            ["Brand", "Sritex"],
            ["Application", "Cotton Ginning Plant"],
            ["Length", "	10 - 20 feet"],
          ],
        },
      ],
    },
  ];

  return <FocusCards cards={cards} size={3} width={"full"} />;
}
