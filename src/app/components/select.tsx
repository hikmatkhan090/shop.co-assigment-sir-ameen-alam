import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
   <div className=" flex justify-between items-center ">
     <Select>
      <SelectTrigger className="w-[180px] ">
        <SelectValue placeholder="Sort by: Most Popular" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort by: Most Popular</SelectLabel>
          <SelectItem value="apple">Sort by: Most Popular</SelectItem>
          <SelectItem value="banana">Sort by: Most Popular</SelectItem>
          <SelectItem value="blueberry">Sort by: Most Populary</SelectItem>
          <SelectItem value="grapes">Sort by: Most Popular</SelectItem>
          <SelectItem value="pineapple">Sort by: Most Popular</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
   </div>
  )
}
