


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
     title:"VERTICAL STRIPED SHIRT",
     id:1,
     price:"$212",
     img_url:"/product5.png",
     old_price:"$232"

    },
    {
     title:"COURAGE GRAPHIC T-SHIRT",
     id:2,
     price:"$145",
     img_url:"/product6.png",
     

    },
    {
     title:"LOOSE FIT BERMUDA SHORTS",
     id:3,
     price:"$80",
     img_url:"/product7.png"

    },
    {
     title:"FADED SKINNY JEANS",
     id:4,
     price:"$210",
     img_url:"/product8.png",
     

    }, 
    
    
]




const Star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    
]



export default function Top_sell (){
    return(
         <div className="w-full h-full sm:h-[500px] mt-10">
            <h1 className="text-center text-3xl md:text-4xl font-extrabold">TOP SELLING</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
                {
                    product.map((data)=>{
                        return(
                          <div key={data.id}>
                            <Link href={`/products/${data.id}`}>
                            <div className="w-[190px] h-[190px] md:w-[290px] md:h-[290px] bg-[#F0EEED] rounded-[20px]">
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

 

