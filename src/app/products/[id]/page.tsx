 "use client"
import Image from "next/image";
//import Image from "next/image";
 import { FaStar } from "react-icons/fa";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";
import Allreviews from "@/app/components/Allreviews";
// import Product from "@/app/components/products";
import Tshirts from "@/app/components/products";
import { BreadcrumbDemo } from "@/app/components/Breadcrumb";

// const Star = [<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>]

const Star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    
]




interface Iproducts{ 
    title:string,
    price:string,
    id:number,
    rating?:string,
    old_price?:string,
    img_url:string,
    img1:string,
    img2:string,
    img3:string,

}
const product:Iproducts[]=[ 
    
    {
     title:"T-SHIRT WITH TAPE DETAILS",
     id:1,
     price:"$120",
     img_url:"/product1.png",
     img1:"/product9.1.png",
     img2:"/product11.png",
     img3:"/product10.png",
    

    },
    {
     title:"SKINNY FIT JEANS",
     id:2,
     price:"$240",
     img_url:"/product2.png",
     old_price:"$200",
     img1:"/product9.1.png",
     img2:"/product11.png",
     img3:"/product10.png",

    },
    {
     title:"CHECKERED SHIRT",
     id:3,
     price:"$180",
     img_url:"/product3.png",
     img1:"/product9.1.png",
     img2:"/product11.png",
     img3:"/product10.png",

    },
    {
     title:"SLEEVE STRIPED T-SHIRT",
     id:4,
     price:"$130",
     img_url:"/product4.png",
     old_price:"$200",
     img1:"/product9.1.png",
     img2:"/product11.png",
     img3:"/product10.png",

    }, 
    
    
]
 
 
 
 
 
 
 
 
 
 export default function  Pro_Detail(){
    const params = useParams();
    // console.log(params)
    const id = params.id
    const item = product.find((item)=>item.id===Number(id))
    if (!item){
      return <h1>Product Not Found</h1>
    }

    return(
        <>
        <BreadcrumbDemo/>
        <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0 px-5 max-w-screen-2xl mx-auto"> 
            {/* left side */}
            <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1 ">
                {/* photos */}
                <Image src={item.img1} className="sm:w-full w-[100px] h-[100px] sm:h-[150px] " alt="productdetails" width={100} height={100}></Image>
                <Image src={item.img2} className="sm:w-full w-[100px] h-[100px] sm:h-[150px] sm:mt-3" alt="productdetails" width={100} height={100}></Image>
                <Image src={item.img3} className="sm:w-full w-[100px] h-[100px] sm:h-[150px] sm:mt-3" alt="productdetails" width={100} height={100}></Image>
            </div>
            
            
            {/* center div */}
            <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
            <Image src={item.img2} alt="productdetails" className="w-full h-[95%]" width={100} height={100}></Image>
            </div>
           
           
            {/* right side div */}
            <div className="w-full sm:w-[600px] h-[500px] mt-3 order-3">
                <h1 className="text-2xl md:text-3xl font-bold">One Life Graphic T-shirt</h1>
                <div className="flex text-yellow-500">
                    {Star}
                </div>
                <p className="font-bold mt-1">{item.price} <span>{item.old_price} </span></p>
                <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
               
               
             
             
                {/* colors */}
                <div className=" mt-5">
                    <p className="text-gray-600">Select Color</p>
                    <div className="flex space-x-3 mt-2">
                    <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full flex justify-center items-center"> <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/> </div>
                    <div className="w-[37px] h-[37px] bg-[#314F4A] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
                    <div className="w-[37px] h-[37px] bg-[#31344F] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
                    </div>

                
                    {/* choose size */}
                    <div className="mt-4 ">
                        <p className="text-gray-600">Choose Size</p>
                       <div className="flex space-x-3 mt-2">
                       <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#f0f0f0] text-gray-500 ">small</div>
                    <div className="w-[90px]    h-[40px] flex justify-center items-center rounded-[62px] bg-[#f0f0f0] text-gray-500  ">medium</div>
                    <div className="w-[80px]    h-[40px] flex justify-center items-center rounded-[62px] bg-black text-white ">large</div>
                    <div className="w-[90px]    h-[40px] flex justify-center items-center rounded-[62px] bg-[#f0f0f0] text-gray-500 ">x-large</div>
                       </div>

                    </div>
                    
                </div>
                {/* buttons */}
                
                <div className="flex justify-start items-center mt-7 space-x-4">
                <div className="w-[100px]    h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#f0f0f0] text-gray-500  ">
                    <Minus/>
                    1
                    <Plus/>
                </div>
                <Button className="text-white bg-black w-[300px]">Add to Cart</Button>
                </div>
                
            </div>
           
         </div>
          <Allreviews/>
          <Tshirts/>
          </>
    )
}