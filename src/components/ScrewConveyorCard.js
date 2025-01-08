import { FocusCards } from "./ui/focus-cards.tsx";

export function ScrewConveyorCard() {
  const cards = [
    {
      List: "Screw Conveyor",
      products: [
        {
          title: "Cotton Screw Conveyor",
          modalData : [
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
              
              src: "https://5.imimg.com/data5/EF/RX/MY-2995798/industrial-air-blower-500x500.jpg",
            },
            {
              
              src: "https://ik.imagekit.io/wratuu6c1/blower%203.PNG?updatedAt=1735291707025",
            },
          ],
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
