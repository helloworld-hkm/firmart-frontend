import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import api from '@/services/api'
import { data } from 'autoprefixer';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { Button } from './ui/button';
const CardSection = ({ children, title, add }) => {

  return (
    <Card className=" border-primary shadow">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          {add &&
            <Link to={"/add"}><Button><FaPlus /> Add</Button></Link>
          }
        </div>
      </CardHeader>
      <hr className='border-1 border-primary' />
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}

export default CardSection
