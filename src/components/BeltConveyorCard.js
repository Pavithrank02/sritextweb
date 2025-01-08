import { FocusCards } from "./ui/focus-cards.tsx";

export function BeltConveyorCard() {
 
  const cards = [
    {
      List: "Belt Conveyor System",
     
      products: [
        {
          title: "Flat Belt Conveyor",
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
          src: "https://ik.imagekit.io/wratuu6c1/IMG_1111.JPEG?updatedAt=1735290483064",
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
          modalData : [
            {
              
              src: "https://ik.imagekit.io/wratuu6c1/IMG_1035.JPEG?updatedAt=1735289152986",
            },
            {
              src: "https://imagekit.io/player/embed/wratuu6c1/IMG_1113.MP4?updatedAt=1735290484777&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fwratuu6c1%2FIMG_1113.MP4%2Fik-thumbnail.jpg%3FupdatedAt%3D1735290484777&updatedAt=1735290484777",
              type:"video"
            },
           
            {
              
              src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              
              src: "https://5.imimg.com/data5/EF/RX/MY-2995798/industrial-air-blower-500x500.jpg",
            },
            {
              
              src: "https://ik.imagekit.io/wratuu6c1/IMG_1035.JPEG?updatedAt=1735289152986",
            },
          ],
          src: "https://ik.imagekit.io/wratuu6c1/IMG_1035.JPEG?updatedAt=1735289152986",
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
