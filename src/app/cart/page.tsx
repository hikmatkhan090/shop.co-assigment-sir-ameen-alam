// import { Item } from "@radix-ui/react-navigation-menu"
import { Button } from "@/components/ui/button"
import {TrashIcon,  Minus, Plus, } from "lucide-react"
import Image from "next/image"
import { BreadcrumbDemo } from "../components/Breadcrumb"

interface Icart {
    imageurl: string,
    title:string,
    id:number,
    size:string,
    color:string,
    price:string
}
const CartItem:Icart[] =[
    {
        imageurl:"/tshirt2.webp",
    title:"Gradient Graphic T-shirt",
    id:1,
    size:"Large",
    color:"white",
    price:"$145" 
    },
    {
        imageurl:"/product3.png",
    title:"CHECKERED SHIRT",
    id:2,
    size:"medium",
    color:"red",
    price:"$180" 
    },
    {
        imageurl:"/product8.png",
    title:"SKINNY FIT JEANS",
    id:3,
    size:"Large",
    color:"blue",
    price:"$240" 
    }
    
]

export default function Cart(){
    return(
        <>
        <div className="pl-5">
        <BreadcrumbDemo/>
        <h1 className="text-4xl font-extrabold pl-5  mt-3">Your Cart</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-3 mt-6">
           
            {/* left side */}
            <div className="w-full h-full md:w-[700px] md:h-[500px] border rounded-[20px] ">
                 {
                    CartItem.map((Item)=>{
                        return(
                            <div className="flex justify-between mt-2 p-4 border-b" key={Item.imageurl} >
                              <div className="flex gap-3">
                              <Image src={Item.imageurl} alt={Item.title} className="rounded-[16px]" width={100} height={100} ></Image>
                            <div>
                                    <h3 className="font-bold ">{Item.title}</h3>
                                    <p className="text-sm ">Size:{Item.size}</p>
                                    <p className="text-sm ">Color:{Item.color}</p>
                                    <p className="font-bold">{Item.price}</p>
                               </div>
                              </div>
                                    {/* right side  */}
                                   <div className="flex justify-between items-center text-red-600 flex-col ">
                                   <TrashIcon/>
                             <div className="w-[100px]    h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#f0f0f0] text-gray-500  ">
                                         <Minus/>
                                         1
                                         <Plus/>
                                </div>
                                   </div>
                               


                            </div>
                        )
                    })
                 }
            </div>


            {/* right side div */}
            <div className="w-full h-full md:w-[400px] md:h-[450px] border rounded-[20px]  flex flex-col justify-start items-center p-4">
                   <div className="w-[90%] space-y-3 ">
                   <h1 className="text-xl font-bold">Order Summary</h1>
                   <p className="flex justify-between text-gray-600 text-xl">Subtotal <span>$565</span></p>
                   <p className="flex justify-between text-gray-600 text-xl">Discount (-20%) <span>-$113</span></p>
                   <p className="flex justify-between text-gray-600 text-xl">Delivery Fee <span >$15</span></p>
                   <p className="flex justify-between p-4 font-bold text-2xl ">Total <span className="text-xl font-bold">$467</span></p>
                   <div className="flex">
                    <input  className="bg-[#F0F0F0] w-[200px]  md:w-full text-gray-600 rounded-[16px] outline-none py-2 px-5"placeholder="Add Promo Code"/>
                   <Button className="ml-1 bg-black text-white hover:bg-black rounded-[16px]   ">Apply</Button>
                   </div>
                   <Button className="w-full bg-black text-white hover:bg-black rounded-[16px] text-xs">Go to Checkout <span> → </span> </Button>
                   </div>
            </div>
        </div>
        </>
    )
}