import CardSection from "@/components/CardSection";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import SelectTypes from "@/components/SelectType";
import SelectItems from "./../../components/SelectItems";

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import api from "@/services/api";
import {  Link, useNavigate } from "react-router-dom";
const AddTransaction = () => {
  const navigate = useNavigate()  
  const [date, setDate] = useState();
  const [inputType, setInputType] = useState();
  const [qty, setQty] = useState();
  const [inputItems, setInputItems] = useState();
  const handleSubmit = () => {
    var data = {
      id_items: parseInt(inputItems),
      id_types: parseInt(inputType),
      quantity_sold: qty,
      transaction_date: format(date,'yyyy-MM-dd'),
    };
    console.log(data)
      api
        .postTransactions(data)
        .then((result) => {
          console.log(result);
        navigate("/")

        })
        .catch((err) => {
          console.log("error:", err);
        });
  };

  return (
    <>
      <CardSection title={"Add Transaction"}>
        <div className="grid gap-4 py-4">
          <SelectItems setInputItems={setInputItems} />
          <SelectTypes setInputType={setInputType} />
          <Input
            type="number"
            placeholder="Quantity"
            onChange={(e) => setQty(e.target.value)}
          />
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
        </div>

        <Link to={"/"} ><Button type="submit"  className={buttonVariants({variant:"outline"}) }onClick={handleSubmit}>
          Back
        </Button></Link>
        <Button type="submit" className="!ml-1" onClick={handleSubmit}>
          Save
        </Button>
      </CardSection>
    </>
  );
};

export default AddTransaction;
