import { FocusCards } from "./ui/focus-cards.tsx";

export function GinningAutomationCard() {
  const modalData = [
    {
      src: "https://imagekit.io/player/embed/wratuu6c1/IMG_1113.MP4?updatedAt=1735290484777&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fwratuu6c1%2FIMG_1113.MP4%2Fik-thumbnail.jpg%3FupdatedAt%3D1735290484777&updatedAt=1735290484777",
      type:"video"
    },
    {
      
      src: "https://ik.imagekit.io/wratuu6c1/IMG_1089.JPEG?updatedAt=1735271418463",
    },
    {
      
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      
      src: "https://ik.imagekit.io/wratuu6c1/IMG_1089.JPEG?updatedAt=1735271418463",
    },
    {
      
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const cards = [
    {
      List: "Ginning Automation Systems",
      products: [
        {
          title: "Cotton Ginning Machine",
          src: "https://ik.imagekit.io/wratuu6c1/IMG_1089.JPEG?updatedAt=1735271418463",
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

  return <FocusCards cards={cards} size={3} width={"full"} modalData={modalData} />;
}
