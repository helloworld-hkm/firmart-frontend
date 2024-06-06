
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// import './App.css'
import { FaTrashCan } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import api from '../../services/api';
import CardSection from "../../components/CardSection";
import { Button, buttonVariants } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Link } from "react-router-dom";

import { format } from 'date-fns';
const TableTransactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading,setLoading]= useState(true)
    useEffect(() => {
      api
        .getTransactions()
        .then((result) => {
          setTransactions(result.data);
          setLoading(false)
        })
        .catch((err) => {
          console.log("error:", err);
        });
    }, []);
  return (
    <>
    <CardSection title="Result" add={true}>
     {loading?
     <div >
         <p className="text-center text-lg font-mono font-medium p-5 justify-center">Loading . . .</p>

</div>


    :
    <Table>
    <TableCaption>A list of your recent transaction.</TableCaption>
    <TableHeader>
      <TableRow className="text-md !text-primary ">
        <TableHead className="w-[50px]">No</TableHead>
        <TableHead>Item</TableHead>
        <TableHead>type</TableHead>
        <TableHead className="">quantity</TableHead>
        <TableHead className="">date</TableHead>
        <TableHead className="text-right">action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
    {transactions.map((i,index)=>(
     
       <TableRow key={i.id}>
       <TableCell className="font-medium">{index+1}</TableCell>
       <TableCell>{i.items.name}</TableCell>
       <TableCell><Badge variant="primary" className="border-primary">{i.types.name}</Badge></TableCell>
       <TableCell className="">{i.quantity_sold}</TableCell>
       <TableCell className="">{format(i.transaction_date,"PPP")}</TableCell>
       <TableCell className="text-right"><Link to={`/edit/${i.id}`}><Button className={buttonVariants({variant:'secondary'})}><FaPen /></Button></Link> <Button className={buttonVariants({variant:'destructive'})}><FaTrashCan /></Button></TableCell>
     </TableRow>
    ))}
     
    </TableBody>
  </Table>
  }
  </CardSection>
  </>
  )
}

export default TableTransactions