import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
const SearchBar = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
    <Input type="text" placeholder="Masukkan Kata kunci" />
    <Button type="submit">Cari</Button>
  </div>    
  )
}

export default SearchBar