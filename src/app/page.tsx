// import Image from "next/image";




import Herosession from "@/components/Herosession";
// import Header from "./components/Header";
// import Navbar from "./components/navbar";
import Font from "@/components/font";
import Products from "./products/page";
import Top_sell from "./products/sell";
import Dress from "./components/Dress";
import CustomerCarousel from "./components/carousel";
// import Size from "./components/size";
// import Footer from "@/components/footer";
// import Offers from "@/components/offers";


export default function Home() {
  return (
    <>
  
 <Herosession/>
 <Font/>
 <Products/>
 <Top_sell/>
 <Dress/>
 <CustomerCarousel/>
 
 
 
 </>
 

 



  );
}
