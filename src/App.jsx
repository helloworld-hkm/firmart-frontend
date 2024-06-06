

import Navbar from "./components/Navbar.jsx";
import TableTransactions from "./pages/transactions/TableTransactions.jsx";
import "./index.css";

import { BrowserRouter, Routes ,Route} from "react-router-dom";
import AddTransaction from "./pages/transactions/AddTransaction.jsx";
import EditTransaction from "./pages/transactions/EditTransaction.jsx";
import Sidebar from "./components/Sidebar.jsx";
function App() {
 

  return (
    <>
    <BrowserRouter>
      <Navbar className="" />
      <div className="container mt-[1rem] flex gap-[1rem] flex-wrap ">
        <div className=" grow  md:grow-0 md:w-full lg:w-[20rem]  sm:w-96">
          <Sidebar/>
        </div>
        <div className="grow">
          {/* <Routes>
              <Route path="/" element={<TableTransactions/>}/> 
            </Routes> */}
           
        

          {/* <TableTransactions className="" /> */}
          <Routes>
            <Route path="/" element={<TableTransactions/>}/>
            <Route path="/add" element={<AddTransaction/>}/>
            <Route path="/edit/:id" element={<EditTransaction/>}/>
            {/* <Route path="/write" element={<Write />} /> */}
          </Routes>
        </div>
      </div>
        
       
          </BrowserRouter>
    </>
  );
}

export default App;
