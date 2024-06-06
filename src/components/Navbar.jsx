
import SearchBar from './SearchBar'
const Navbar = () => {
  return (
    <div className='bg-blue-100 p-[1rem] border-b-2 border-primary '>
        <div className="container flex gap-[2rem]  justify-between items-center">

        <img src="/public/full.png" className='w-[10rem]' alt=""  />
        <SearchBar/>
        </div>
        
    </div>
  )
}

export default Navbar