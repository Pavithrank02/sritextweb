import { FocusCards } from "./ui/focus-cards.tsx";

export function AirBlowerCard() {

  const cards = [
    {
      List: "Air Blower",
     
      products: [
        {
          title: "High Pressure Air Blower",
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
          src: "https://ik.imagekit.io/wratuu6c1/blower%203.PNG?updatedAt=1735291707025",
          details: [
            ["Price", " 1,50,000/ Unit"],
            ["Motor Rating", "	1 to 35 HP"],
            ["Power Source", "	Electric Blower"],
            ["Blower Type", "Centrifugal Blower"],
            ["Fan Speed", "		1000-2000 rpm, 2000-3000 rpm"],
          ],
          
        },

        {
          title: "Industrial Air Blower",
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
          src: "https://5.imimg.com/data5/EF/RX/MY-2995798/industrial-air-blower-500x500.jpg",
          details: [
            ["Price", "₹ 1,50,000/ Unit"],
            ["Motor Rating", "1 to 35 HP"],
            ["Blower Type", "Centrifugal Blower"],
            ["Fan Speed", "1000-2000 rpm, 2000-3000 rpm"],
          ],
        },
        {
          title: "Centrifugal Air Blower",
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
          src: "https://5.imimg.com/data5/RU/XD/MY-2995798/centrifugal-air-blower-500x500.jpg",
          details: [
            ["Price", "₹ 1,75,000/ Unit"],
            ["Power Source", "Electric Blower"],
            ["Pressure", "Medium Pressure"],
            ["Electric Current Type", "	AC"],
            ["Blade Material", "	Mild Steel"],
            ["Noise (dBA)", "		35 dBA"],
            ["Frequency (Hertz)", "	50"],
            ["Phase", "	3 phase"],
            ["Fan Speed (Rpm) ", "1440 to 2800 rpm"],
            ["Automation Grade", "	Manual"],
            ["Material", "	Steel"],
            ["Application", "	Cotton Industry, Match box industry"],
            ["Blower Type", "	Centrifugal Blower"],
            ["Power", "	1 to 35 HP"],
            ["Voltage", "	220-440 V"],

          ],
        },
      ],
    },
  ];

  return <FocusCards cards={cards} size={3} width={"full"} />;
}
