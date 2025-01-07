import { AccordionDemo } from "../components/accordion";
import { BreadcrumbDemo } from "../components/Breadcrumb";
import Casualshirts from "../components/casualshirts";
import { CheckboxDemo } from "../components/checkbox";
import { DressStyle } from "../components/dressstyle";
import Size from "../components/size";
import { SliderDemo } from "../components/slider";

export default function Casual(){
    return(
        <>
        <BreadcrumbDemo/>
        <main className="flex flex-col sm:flex-row justify-center items-center space-x-6">
         {/* left side */}
         <div className="w-full h-full md:w-[295px] md:h-[1200px] border rounded-[16px]">
            <AccordionDemo/>
            <SliderDemo/>
            <CheckboxDemo/>
            <Size/>
            <DressStyle/>
         </div>
        {/* right side */}
         <div className="w-full md:w-[900px] h-full sm:h-[1200px]">
            <Casualshirts/>
         </div>
        </main>
        </>
    )
}