import Image from "next/image";

export default function Dress(){
    return(
        <div className="w-full h-full mt-5 sm:h-[500px] flex justify-start items-center bg-[#F0F0F0] flex-col p-8 px-5 max-w-screen-2xl mx-auto ">
            {/* first div */}
            <div className="mt-2">
                <h1 className="text-3xl font-extrabold pl-6 sm:pl-0">BROWSE BY DRESS STYLE</h1>
            </div>
            {/* buttom div */}
            <div className="w-[90%] h-full sm:h-[600px] mt-8 flex flex-wrap justify-center items-center">
                <div className="w-[400px] m-1  h-[200px] relative">
                    <Image src={"/product12.png"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="dressstyle"></Image> 
                    <span className="absolute top-5 left-5 font-bold text-xl">Casual</span>
                    </div>
                <div className="w-[600px] m-1 h-[200px] relative">
                    <Image src={"/product13.png"} className="w-full h-full rounded-[20px] "  width={100} height={100} alt="dressstyle"></Image> 
                        <span className="absolute top-5 left-5 font-bold text-xl">Formal</span>
                    </div>
                <div className="w-[600px] m-1 h-[200px] relative ">
                    <Image src={"/product14.png"} className="w-full h-full rounded-[20px]"  width={100} height={100} alt="dressstyle"></Image> 
                        <span className="absolute top-5 left-5 font-bold text-xl">Party</span>
                    </div>
                <div className="w-[400px] m-1 h-[200px] relative"> 
                    <Image src={"/product15.png"} className="w-full h-full rounded-[20px]"  width={100} height={100} alt="dressstyle"></Image>
                    <span className="absolute top-5 left-5 font-bold text-xl">Gym</span>
                </div>

                
                
            </div>
        </div>
    )
}
