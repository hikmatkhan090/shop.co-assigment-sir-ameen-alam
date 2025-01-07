import { MdOutlineMailOutline } from "react-icons/md";

// import { CiSearch } from "react-icons/ci";

export default function Offers(){
    return(
        <main className=" w-full flex justify-center items-center px-5 max-w-screen-2xl mx-auto">
            <div className="w-[80%] h-full sm:h-[150px] bg-black  text-white flex flex-col sm:flex-row items-center p-5 rounded-[20px]">
                <h1 className="  text-2xl sm:text-4xl font-extrabold ">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                <div className="space-y-3  sm:ml-10">
                 <div className='flex justify-start items-center  bg-[#F0F0F0] mt-2 sm:w-[330px] h-[40px] rounded-[62px]   '>
                   <MdOutlineMailOutline className='text-xl ml-2 text-black' />
                   <input placeholder='Search for products...' className=' w-full h-full outline-none text-[#00000066] ml-2  rounded-[62px] bg-[#F0F0F0]  '></input>
                </div>
                <div className='flex justify-center items-center bg-[#F0F0F0] mt-2 sm:w-[330px] h-[40px] rounded-[62px]   '>
                   <p className="text-black">Subscribe to Newsletter</p>
                </div>
                </div>
            </div>
        </main>
    )
}