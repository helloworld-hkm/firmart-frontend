 
import * as React from "react"
import { useEffect, useState } from "react";
// import { CalendarIcon } from "@radix-ui/react-icons"

import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
const Range = () => {
  const [date, setDate] = useState()
  const [enddate, setEndDate] = useState()

  const handleFilter=()=>{
    console.log(date)
    console.log(enddate)
  }
  return (
    <>
    <Popover>
    <PopoverTrigger asChild>
      <Button
        variant={"outline"}
        className={cn(
          " justify-start text-left font-normal",
          !date && "text-muted-foreground"
        )}
      >
        {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
        {date ? format(date, "PPP") : <span>Start date</span>}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0" align="start">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        initialFocus
      />
    </PopoverContent>
  </Popover>
    <Popover>
    <PopoverTrigger asChild>
      <Button
        variant={"outline"}
        className={cn(
          "justify-start text-left font-normal",
          !enddate && "text-muted-foreground"
        )}
      >
        {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
        {enddate ? format(enddate, "PPP") : <span>End date</span>}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0" align="start">
      <Calendar
        mode="single"
        selected={enddate}
        onSelect={setEndDate}
        initialFocus
      />
    </PopoverContent>
  </Popover>
  <Button onClick={handleFilter}>Filter</Button>

  </>
  )
}

export default Range