import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CardSection from "@/components/CardSection";
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
const EditTransaction = () => {
    const {id} = useParams();
    const navigate = useNavigate()  
    const [date, setDate] = useState();
    const [inputType, setInputType] = useState();
    const [qty, setQty] = useState();
    const [inputItems, setInputItems] = useState();
    const [data,setData]=useState()
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
      api
      .getTransactionsById(id)
      .then((result) => {
        setInputItems(result.data.id_items)
        setInputType(result.data.id_types)
        setQty(result.data.quantity_sold)
       setDate(result.data.transaction_date);
        setLoading(false)
      })
      .catch((err) => {
        console.log("error:", err);
      });
    },[])
    const handleSubmit = () => {
      var data = {
        id_items: parseInt(inputItems),
        id_types: parseInt(inputType),
        quantity_sold: qty,
        transaction_date: format(date,'yyyy-MM-dd'),
      };
      console.log(data)
        api
          .putTransactions(id,data)
          .then((result) => {
            console.log(result);
          navigate("/")
  
          })
          .catch((err) => {
            console.log("error:", err);
          });
    };
  return (
    <CardSection title={"Edit Transaction"}>
      {loading?
      <div >
      <p className="text-center text-lg font-mono font-medium p-5 justify-center">Loading . . .</p>
      </div>
      :
      <>
    <div className="grid gap-4 py-4">
      <SelectItems setInputItems={setInputItems} inputItems={inputItems} />
      <SelectTypes setInputType={setInputType} inputType={inputType} />
      <Input
        type="number"
        placeholder="Quantity"
        value={qty}
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
    </>
    }
  </CardSection>
  )
}

export default EditTransaction