
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
import { Link, useLocation, useParams } from "react-router-dom";
import { format } from 'date-fns';
import ConfirmDelete from "@/components/ConfirmDelete";


const TableTransactions = () => {
  const location = useLocation(); 
  const useQueryParams = () => {
    return new URLSearchParams(location.search);
  };
  const {by,keyword,type,from,to}=useParams()
    const [transactions, setTransactions] = useState();
    const [loading,setLoading]= useState(true)
    // const { from, to } = useQueryParams();
  
  
  
 

    var title ="All transactions"
    if (by=='name') {
        title="Sort By Item Name"
     } else if(by=='date'){
        title="Sort By Transaction Date"
     }
     if(keyword!=undefined){
      title="Search Result  : "+keyword
     }
     if(type!=undefined){
      title="All Transactions : "+type
     }
    const fetchData=  ()=>{
      if (by!=undefined) {
        api
        .getOrderTransactions(by)
        .then((result) => {
          setTransactions(result.data);
          console.log(result)
          setLoading(false)
        })
        .catch((err) => {
          console.log("error:", err);
        });
      
      }else if(keyword!=undefined){
        api
        .searchTransactions(keyword)
        .then((result) => {
          setTransactions(result.data);
          console.log(result.data);
          setLoading(false)
          
        })
        .catch((err) => {
          console.log("error:", err);
        });
      }else if(type!=undefined){
        console.log('this is from',from)
        if (from!=undefined) {
          api
        .rangeTransactions(type,from,to)
        .then((result) => {
          setTransactions(result.data);
          console.log('this is rage',result.data)
          setLoading(false)
        })
        .catch((err) => {
          console.log("error:", err);
        });
        }else{
        api
        .groupTransactions(type)
        .then((result) => {
          setTransactions(result.data);
          console.log(result.data)
          setLoading(false)
        })
        .catch((err) => {
          console.log("error:", err);
        });
      }
      }else{
      api
        .getTransactions()
        .then((result) => {
          setTransactions(result.data);
          setLoading(false)
          
        })
        .catch((err) => {
          console.log("error:", err);
        });
      }
    }
    useEffect(() => {
      setLoading(true)
      fetchData()
      console.log(by)
   

      
    }, [by,keyword,type,from]);
  return (
    <>
    <CardSection title={title} add={true}>
     {loading?
     <div >
         <p className="text-center text-lg font-mono font-medium p-5 justify-center">Loading . . .</p>

</div>


    :
    transactions=="" ?
   
    <p className="text-center text-lg font-mono font-medium p-5 justify-center">No data Entries</p>
    :<Table>
    <TableCaption>A list of your recent transaction.</TableCaption>
    <TableHeader>
      <TableRow className="text-md !text-primary ">
        <TableHead className="w-[50px]">No</TableHead>
        <TableHead>Item</TableHead>
        <TableHead>type</TableHead>
      
        <TableHead className="w-[50px]">Quantity</TableHead>
        <TableHead className="">Date</TableHead>
        <TableHead className="text-right">action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
    {transactions.map((i,index)=>(
     
       <TableRow key={i.id}>
       <TableCell className="font-medium">{index+1}</TableCell>
       <TableCell>{i.items.name}</TableCell>
       <TableCell><Badge variant="primary" className="border-primary">{i.items.types.name}</Badge></TableCell>
      
       <TableCell className="">{i.quantity_sold}</TableCell>
       <TableCell className="">{format(i.transaction_date,"PPP")}</TableCell>
       <TableCell className="text-right "><Link to={`/edit/${i.id}`} className="mr-2"><Button className={buttonVariants({variant:'secondary',size:'sm'})}><FaPen /></Button></Link> 
      
        <ConfirmDelete id={i.id} fetchData={fetchData} setLoading={setLoading}/> 
       
       
       </TableCell>
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