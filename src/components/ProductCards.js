import { FocusCards } from "../components/ui/focus-cards.tsx";

export function ProductCards() {
  const cards = [
    {
      List: "Cotton Baling Press Machine",
      products: [
        {
          title: "Automatic Cotton Baling Press",
          src: "https://images.squarespace-cdn.com/content/v1/54ff7cd3e4b0bc757625e06d/1484265999119-XUVJZYMD4V6TETXW97OT/Manufacturing+Plant",
          details: [
            ["Price", "₹ 12,00,000/ Unit"],
            ["Phase", "Three Phase"],
            ["Automatic Grade", "Manual, Semi-Automatic, Automatic"],
            ["Capacity", "150 - 300 tons"],
            ["Material (To be worked upon)", "Textile"],
            ["Hydraulic Pressure (Bar)", "150 - 180 bar"],
            ["Production Rate (Bales/Hour)", "4-12 bale/hr"],
            ["Power", "10 - 40 HP"],
          ],
        },

        {
          title: "Cotton Baling Press",
          src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          details: [
            ["Price", "₹ 5,00,000/ Unit"],
            ["Automatic Grade", "Manual, Semi-Automatic, Automatic"],
            ["Capacity", "150 - 300 tons"],
            ["Material (To be worked upon)", "Textile"],
            ["No. Of Cylinder", "2"],
            ["Oil tank capacity (Litres)", "	400 - 1200 liters"],
            ["Working Pressure", "		150 - 180 bar"],
            ["Production Capacity", "4-12 bale/hr"],
          ],
        },
        {
          title: "Cotton Baling Press",
          src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          details: [
            ["Price", "₹ 5,00,000/ Unit"],
            ["Automatic Grade", "Manual, Semi-Automatic, Automatic"],
            ["Capacity", "150 - 300 tons"],
            ["Material (To be worked upon)", "Textile"],
            ["Production Capacity", "	4-12 bale/hr"],
            ["Voltage", "	380 to 420 V"],
            ["Frequency", "50/60 Hz"],
          ],
        },
        {
          title: "Hydraulic Baling Press",
          src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          details: [
            ["Price", "₹ 12,00,000/ Unit"],
            ["Phase", "Three Phase"],
            ["Automatic Grade", "Manual, Semi-Automatic, Automatic"],
            ["Control Type", "Non-CNC"],
            ["Hydraulic Pressure (Bar)", "150 - 180 bar"],
            ["Bail Size (millimetre)", "1200*600*600 mm"],
            ["Bail Weight(Kilogram)", "160 -180 kg"],
            ["No. Of Cylinder", "1 or 2"],
            ["Oil tank capacity (Litres)", "	400 - 1200 liters"],
            ["Production Capacity", "	4-12 bale/hr"],
            ["Power", "10 - 40 HP"],
          ],
        },
      ],
    },
  ];

  return <FocusCards cards={cards} size={3} width={"full"} />;
}
