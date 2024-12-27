import { FocusCards } from "../components/ui/focus-cards.tsx";

export function ProductCards() {
  const modalData = [
    {
      src: "https://imagekit.io/player/embed/wratuu6c1/IMG_1113.MP4?updatedAt=1735290484777&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fwratuu6c1%2FIMG_1113.MP4%2Fik-thumbnail.jpg%3FupdatedAt%3D1735290484777&updatedAt=1735290484777",
      type:"video"
    },
    {
      
      src: "https://ik.imagekit.io/wratuu6c1/Baling%20Machine%201.jpg?updatedAt=1735288594343",
    },
    {
      
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      
      src: "https://ik.imagekit.io/wratuu6c1/IMG_1075.JPEG?updatedAt=1735289004158",
    },
    {
      
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const cards = [
    {
      List: "Cotton Baling Press Machine",
      products: [
        {
          title: "Automatic Cotton Baling Press",
          src: "https://ik.imagekit.io/wratuu6c1/Baling%20Machine%201.jpg?updatedAt=1735288594343",
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
        // https://drive.google.com/file/d/0B4Y-whsyiuGOMi1xaGVOSHJYSndyUlpqTHpkSUtUT2NkU044/view?usp=sharing&resourcekey=0-wBGX6fGkTHu7ET12XovL1g
        {
          title: "Cotton Baling Press",
          src: "https://5.imimg.com/data5/IE/YH/MY-2995798/cotton-baling-press-500x500.jpg",
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
          src: "https://5.imimg.com/data5/FN/QO/MY-2995798/manual-baling-press-500x500.jpg",
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
          src: "https://5.imimg.com/data5/YW/RT/MY-2995798/hydraulic-baling-press-500x500.jpg",
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

  return <FocusCards cards={cards} size={3} width={"full"} modalData={modalData}/>;
}
