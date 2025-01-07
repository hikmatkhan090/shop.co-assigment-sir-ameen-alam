import { RxCaretUp } from "react-icons/rx";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";

// import { Filter } from "lucide-react"
  
  export function DressStyle() {
    return (
      <div className="p-5">
        <div className="flex justify-between items-center border-b-2 mt-2">
        
        <h1 className="font-bold text-2xl mt-0">Dress Style</h1>
        <RxCaretUp />
        
        </div>

        <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-gray-500  font-normal">Casual</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-gray-500  font-normal">Formal</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-gray-500  font-normal">Party</AccordionTrigger>
          <AccordionContent>
            Yes. Its animated by default, but you can disable it if you prefer.
          </AccordionContent>
          </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-gray-500  font-normal ">Gym</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
          </AccordionItem>
           </Accordion>
           <div className="flex items-center justify-center  rounded-[20px] text-white">
            <Button variant={"outline"} className="bg-black rounded-2xl w-[240px] h-[40px] hover:bg-black " >Apply Filter</Button>
           </div>
      
      </div>
    )
  }
  