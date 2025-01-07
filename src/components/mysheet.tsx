"use client"

import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  
  SheetContent,
  
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { NavigationMenuDemo } from "./NavigationMenuDemo";

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant={"secondary"}>
                <IoMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Shop.co</SheetTitle>
      
            </SheetHeader>
            
            <ul className=''>
        <li className='gape-y-4 grid grid-cols-1'>
        <Link href={""}><NavigationMenuDemo/></Link>
        <Link className="ml-3" href={""}>On Sale</Link>
        <Link className="ml-3" href={""}>New Arrivals</Link>
        <Link className="ml-3" href={""}>Brands</Link>
        </li>
      </ul>
           
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
