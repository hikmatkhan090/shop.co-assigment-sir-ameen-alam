

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";





interface Iproducts{ 
    title:string,
    price:string,
    id:number,
    rating?:string,
    old_price?:string
    img_url:string

}
const product:Iproducts[]=[ 
    
    {
     title:"Polo with Contrast Trims",
     id:1,
     price:"$212",
     img_url:"/tshirt1.png",
     old_price:"$232"

    },
    {
     title:"Gradient Graphic T-shirt",
     id:2,
     price:"$145",
     img_url:"/tshirt2.webp",
     

    },
    {
     title:"Polo with Tipping Details",
     id:3,
     price:"$180",
     img_url:"/tshirt3.webp",

    },
    {
     title:"Black Striped T-shirt",
     id:4,
     price:"$220",
     img_url:"/tshirt4.webp",
     old_price:"$150",
     

    }, 
    
    
]




const Star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    
]



export default function Tshirts (){
    return(
         <div className="w-full h-full sm:h-[500px] mt-10 px-5 max-w-screen-2xl mx-auto">
            <h1 className="text-center text-3xl mt-3 md:text-4xl font-extrabold">YOU MIGHT ALSO LIKE</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
                {
                    product.map((data)=>{
                        return(
                          <div key={data.id}>
                            <Link href={`/products/${data.id}`}>
                            <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px]">
                            <Image src={data.img_url} alt={data.title} width={100} height={100} className="w-full h-full rounded-[20px]" ></Image>
                            </div>
                            </Link>
                            <div>
                            <p className="text-lg font-bold mt-2 ">{data.title} </p>
                            <p className="flex text-yellow-400">{Star} </p>
                            <p className="font-bold mt-1"> {data.price} <span className="text-gray-400 font-bold line-through">{data.old_price}</span> </p>
                            </div>
                          </div>
                        )
                    })
                }
            </div>
         </div>

    )
}

 

