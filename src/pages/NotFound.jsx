import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom';
// import { Link } from 'lucide-react';

const NotFound = () => {
  return (
    <Alert variant="destructive" className="brutalism ">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Page Not Found</AlertTitle>
  <AlertDescription>
  Looks Like You&apos;re Lost, Please go <Link to={'/'} className='text-primary hover:text-slate-900  font-bold border-b-2 hover:border-none border-primary'>Home</Link> Now !!!
  </AlertDescription>
</Alert>

  )
}

export default NotFound