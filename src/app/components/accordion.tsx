import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Filter } from "lucide-react"
  
  export function AccordionDemo() {
    return (
      <div className="p-5">
        <div className="flex justify-between items-center border-b-2 mt-2">
        <h1 className="font-bold text-2xl mt-0">Filter</h1>
        <Filter/>
        </div>

        <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-gray-500  font-normal">T-shirts</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-gray-500  font-normal">Shorts</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-gray-500  font-normal">Shirts</AccordionTrigger>
          <AccordionContent>
            Yes. Its animated by default, but you can disable it if you prefer.
          </AccordionContent>
          </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-gray-500  font-normal ">Hoodie</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
          </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-gray-500 font-normal">Jeans</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        
      </Accordion>
      </div>
    )
  }
  