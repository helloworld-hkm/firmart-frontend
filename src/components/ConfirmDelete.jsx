import React from 'react'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { FaTrashCan } from 'react-icons/fa6'
import { Button } from './ui/button'
import { buttonVariants } from '@/components/ui/button';
import api from '@/services/api';
const ConfirmDelete = ({id,fetchData,setLoading}) => {
    const handleDelete=(id)=>{
        setLoading(true)
        api.deleteTransactions(id).then((result) => {
            console.log(result)
           
            fetchData()
        }).catch((err) => {
            console.log(err)
        });
    }
  return (
    <AlertDialog>
        
    <AlertDialogTrigger  asChild><Button className={buttonVariants({variant:'destructive',size:'sm'})}><FaTrashCan /></Button></AlertDialogTrigger>
    
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction className={buttonVariants({variant:'destructive'})} onClick={()=>handleDelete(id)}>Delete</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  
  )
}

export default ConfirmDelete