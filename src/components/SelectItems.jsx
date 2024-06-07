import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import api from '@/services/api';
  
const SelectItems = ({setInputItems,inputItems}) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    api
      .getItems()
      .then((result) => {
        setItems(result.data);
      })
      .catch((err) => {
        console.log("error:", err);
      });
      console.log(items)
  }, []);
  return (
<Select className="brutalism" value={inputItems}  onValueChange={setInputItems}>
  <SelectTrigger className="">
    <SelectValue placeholder="Items" />
  </SelectTrigger>
  <SelectContent>
    {items.map((i)=>(
      <SelectItem key={i.id} value={i.id} >{i.name}</SelectItem>

    ))}
    
  </SelectContent>
</Select>

  )
}

export default SelectItems