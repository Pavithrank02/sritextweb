import { FocusCards } from "./ui/focus-cards.tsx";

export function BriqProductCard() {
  const modalData = [
    {
      src: "https://imagekit.io/player/embed/wratuu6c1/IMG_1113.MP4?updatedAt=1735290484777&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fwratuu6c1%2FIMG_1113.MP4%2Fik-thumbnail.jpg%3FupdatedAt%3D1735290484777&updatedAt=1735290484777",
      type:"video"
    },
    {
      
      src: "https://5.imimg.com/data5/RU/XD/MY-2995798/centrifugal-air-blower-500x500.jpg",
    },
    {
      
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      
      src: "https://ik.imagekit.io/wratuu6c1/IMG_2601.HEIC?updatedAt=1735275602260",
    },
    {
      
      src: "https://ik.imagekit.io/wratuu6c1/briquet.png?updatedAt=1735279723945",
    },
  ];
  const cards = [
    {
      List: "Briquetting Machine",
      products: [
        {
          title: "Charcoal Briquette Machine",
          src: "https://ik.imagekit.io/wratuu6c1/briquet.png?updatedAt=1735279723945",
          details: [
            ["Price", "Get Quote"],
            ["Brand", "	Sritex"],
            ["Automatic Grade", "Manual, Semi-Automatic"],
            ["Production Capacity", "1000 - 1500 kg/hr"],
            ["Raw Material Processed", "	Coal Powder,Charcoal Powder"],
            ["Power", "5 HP"],
          ],
        },

        {
          title: "Coal Briquetting Machine",
          src: "https://ik.imagekit.io/wratuu6c1/IMG_2601.HEIC?updatedAt=1735275602260",
          details: [
            ["Price", "Get Quotet"],
            ["Automatic Grade", "Semi automatic and Manual"],
            ["Material", "	Coal"],
            ["Motor Power", "	5 HP"],
            ["Raw Material Processed", "Coal"],
            ["Output Ball Size", "	As per Design"],
          ],
        },
        
        {
          title: "Briquetting Machine",
          src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          details: [
            ["Price", "Get Latest Price"],
            ["Phase", "Three Phase"],
            ["Automatic Grade", "Semi Automatic and Manual"],
            ["Raw Material Processed", "Charcoal Powder"],
            ["Production Capacity", "1000-1500 kg/hr"],
            ["Output Ball Size", "As per Design"],
            ["Material", "	Coal"],
            ["Power", "5 HP"],
          ],
        },
      ],
    },
  ];

  return <FocusCards cards={cards} size={3} width={"full"} modalData={modalData}/>;
}
