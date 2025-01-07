// import Offers from "./offers";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Offers from "./offers";
export default function Footer(){
    return(
        <main className="bg-[#f0f0f0] w-full h-full md:h-[450px] relative mt-32 px-5 max-w-screen-2xl mx-auto ">
           {/*  */}
           <span className="absolute top-[-80px]">
           <Offers/>
           </span>


           {/* container */}
          <div className="h-full md:h-[400px] flex flex-col md:flex-row justify-between items-start p-5 pt-[160px] sm:pt-32 border-b">
           {/* top div */}
           <div className="flex flex-col justify-center items-center w-[200px]">
             <ul>
                <h2 className="text-2xl mt-6 sm:text-3xl font-extrabold">SHOP.CO</h2>
                <p className="text-sm mt-3 font-medium">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                  {/* social media links */}
                  <div className="flex items-center space-x-3 mt-3">
                  <BsInstagram className="text-xl"/>
                  <FaFacebookF className="text-xl"/>
                     <FaGithub className="text-xl"/>
                    <FaTwitter className="text-xl"/>
                  </div>

             </ul>
             </div>
           {/* mid div */}
           <div className="w-full sm:mt-3  md:w-[900px] grid grid-cols-2 sm:grid-cols-4 sm:place-items-center space-y-4">
           {/* box 1 */}
           <ul className="space-y-3 mt-5">
              <h2 className="text-sm sm:text-2xl">COMPANY</h2>
              <li className="text-sm text-gray-700">About</li>
              <li className="text-sm text-gray-700">Features</li>
              <li className="text-sm text-gray-700">work</li>
              <li className="text-sm text-gray-700">Career</li>
            </ul>
            {/* box 2 */}
           <ul className="space-y-3">
              <h2  className="text-sm sm:text-2xl">HELP</h2>
              <li className="text-sm text-gray-700" >Customer Support</li>
              <li className="text-sm text-gray-700" >Delivery Details</li>
              <li className="text-sm text-gray-700" >Terms & Conditions</li>
              <li className="text-sm text-gray-700" >Privacy Policy</li>
            </ul>
            {/* box 3 */}
           <ul className="space-y-3">
              <h2  className="text-sm sm:text-2xl">FAQ</h2>
              <li className="text-sm text-gray-700">Account</li>
              <li className="text-sm text-gray-700">Manage Deliveries</li>
              <li className="text-sm text-gray-700">Orders</li>
              <li className="text-sm text-gray-700">Payments</li>
            </ul>
             {/* box 3 */}
           <ul className="space-y-3">
              <h2  className="text-sm sm:text-2xl">RESOURCES</h2>
              <li className="text-sm text-gray-700">Free eBooks</li>
              <li className="text-sm text-gray-700">Development Tutorial</li>
              <li className="text-sm text-gray-700">How to - Blog</li>
              <li className="text-sm text-gray-700">Youtube Playlist</li>
            </ul>
            {/* complete */}
           </div>

           </div>
           {/* bottom div */}
           <div className="flex flex-col sm:flex-row justify-between items-center sm:mt-[-30px] pl-2 ">
            <p className="text-sm">Shop.co © 2000-2025, THIS SHOP IS OWN BY HIKMAT</p>
            
            <div className="flex items-center  ">
              <Image src={"/Badge1.png"} className="w-[60px] h-[40px] " alt="payment" width={100} height={100}></Image>
              <Image src={"/Badge2.png"} className="w-[60px] h-[40px] " alt="payment" width={100} height={100}></Image>
              <Image src={"/Badge3.png"} className="w-[60px] h-[40px] " alt="payment" width={100} height={100}></Image>
              <Image src={"/Badge4.png"} className="w-[60px] h-[40px] " alt="payment" width={100} height={100}></Image>
              <Image src={"/Badge5.png"} className="w-[60px] h-[40px] " alt="payment" width={100} height={100}></Image>
              
            </div>
           </div>
        </main>
    )
}

