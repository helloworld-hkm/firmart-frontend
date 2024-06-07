import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import api from '@/services/api';
  
const SelectTypes = ({setInputType,inputType}) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    api
      .getTypes()
      .then((result) => {
        setItems(result.data);
        setInputType(result.data);
      })
      .catch((err) => {
        console.log("error:", err);
      });
      
  }, []);


  return (
<Select className="brutalism" value={inputType} onValueChange={setInputType}>
  <SelectTrigger className="" >
    <SelectValue placeholder="Type" />
  </SelectTrigger>
  <SelectContent  >
  {items.map((i)=>(
  
      <SelectItem key={i.id}  value={i.id} 
      >{i.name}</SelectItem>

    ))}
  </SelectContent>
</Select>

  )
}

export default SelectTypes