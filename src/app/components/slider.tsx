import { RxCaretUp } from "react-icons/rx";
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <div className="px-5   ">
       
        <h1 className="   font-bold mb-4  mt-0   ">Price</h1>
            <RxCaretUp/>
        <Slider 
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn(" hover:bg-black bg-black w-[90%]", className)}
      {...props}
    />
   
    <div className="flex justify-around items-center">
        <h1 className="font-bold mt-1">$50</h1>
        <h1 className="font-bold mt-1 ">$100</h1>
    </div>
    </div>
  )
}
