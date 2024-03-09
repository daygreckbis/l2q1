"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
 
export function Searchbar() {
  return (
    <div className="flex w-full max-w-sm items-center pr-2.5 ">
      <Input type="keyword" placeholder="Rechercher..." className="rounded-r-none"/>
      <Button type="submit" className="rounded-l-none bg-transparent text-black border-r border-t border-b border-gray-200 hover:bg-gray-200">{">"}</Button>
    </div>
  )
}