import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const navigate=useNavigate()
  const [keyword,setKeyword]=useState("")
  const handleSearch=()=>{
    if(keyword!=""){
    navigate(`/search/${keyword}`)
    setKeyword("")
    }
  }
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
    <Input type="text" placeholder="Ex : indomie or 2024-06-24" value={keyword} onChange={(e)=>setKeyword(e.target.value)} />
    <Button type="submit" onClick={handleSearch}>Search</Button>
  </div>    
  )
}

export default SearchBar