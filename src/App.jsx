

import Navbar from "./components/Navbar.jsx";
import TableTransactions from "./pages/transactions/TableTransactions.jsx";
import "./index.css";

import { BrowserRouter, Routes ,Route, useNavigate} from "react-router-dom";
import AddTransaction from "./pages/transactions/AddTransaction.jsx";
import EditTransaction from "./pages/transactions/EditTransaction.jsx";
import Sidebar from "./components/Sidebar.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar className="" />
      <div className="container mt-[1rem] flex gap-[1rem] flex-wrap ">
        <div className="xs:w-full xs:grow  md:w-[20rem] ">
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
            <Route path="/sort/:by" element={<TableTransactions/>}/>
            <Route path="/search/:keyword" element={<TableTransactions/>}/>
            <Route path="/type/:type" element={<TableTransactions/>}/>
            <Route path="/type/:type/:from/:to" element={<TableTransactions/>}/>
            {/* <Route path="/write" element={<Write />} /> */}
            <Route path="/*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
        
       
          </BrowserRouter>
    </>
  );
}

export default App;
