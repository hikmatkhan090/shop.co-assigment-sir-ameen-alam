

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

import { FaStar } from "react-icons/fa6";

const Reviews = [
    {
      name: "Samantha D.",
      feedback:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
      rating: 5,
      verified: true,
      date:"posted on august 14, 2023"
    },
    {
      name: "Alex M..",
      feedback:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
      rating: 5,
      verified: true,
      date:"posted on august 14, 2023"
    },
    {
      name: "Ethan R.",
      feedback:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: false,
      date:"posted on august 14, 2023"
    },
    {
      name: "Olivia P.",
      feedback:
       "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: true,
      date:"posted on august 14, 2023"
    },
    {
      name: "Liam K.",
      feedback:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: true,
      date:"posted on august 14, 2023"
    },
    {
        name: "Ava H.",
        feedback:
          "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 5,
        verified: true,
        date:"posted on august 14, 2023"
      },
  ];

  const Star = [
      <FaStar key={1} />,
      <FaStar key={2} />,
      <FaStar key={3} />,
      <FaStar key={4} />,
      
  ]

export default function Allreviews(){
    return(
        <main className="px-5 max-w-screen-2xl mx-auto">
            <div className="flex justify-evenly items-center mt-5  border-b-2  p-6">
                <h1 className="text-gray-500 text-xl ">Product Details</h1>
                <h1 className="text-black font-semibold  text-xl ">Rating & Reviews</h1>
                <h1 className="text-gray-500 text-xl">FAQs</h1>
                
            </div>
          {/* top div */}
          <div className="px-5 p-5 flex justify-between">
            <h1 className="text-2xl font-bold mt-3">All reviews </h1>
           <div className="space-x-3 flex">
           <Button variant={"outline"} className=" hidden md:block "  >latest</Button>
           <Button className="bg-white" >Write a Review</Button>
           
           </div>
           
           
          </div>
          {/* container */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 mt-3 md:mt-0">
                {
                    Reviews.map((data)=>{
                        return(
                          
                         <div className="border p-5 rounded-[20px] bg-gray-100" key={data.name}>
                              <p className="flex text-yellow-400">{Star}</p>
                              <h2 className="font-bold text-xl mt-1 flex">{data.name} <Check className="bg-green-600 w-[24px] h-[24px] rounded-full text-white"/> </h2>
                              <p className="text-sm">{data.feedback}</p>
                              <p className="mt-5 text-gray-500">{data.date}</p>

                         </div>

                        )
                    })
                    
                }
            </div>
            <div className="flex items-center justify-center p-5 rounded-[20px]">
            <Button variant={"outline"} className="bg-white rounded-2xl p-3" >Load More Reviews </Button>
            </div>
          </div>
        </main>
    )
}