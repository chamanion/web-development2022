
import './App.css';

import { render } from "react-dom";
import { 
  BrowserRouter as
  Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AddUser from './Component/AddUsers/AddUser';
import Users from './Component/Users/Users';
import UpdateUser from './Component/UpdateUser/UpdateUser';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';

function App() {
  return (
    
    <div className="App">
     
 
  <Router>
  <Header/>
    <Routes>
        
     
          <Route path="/" element={<Home/>}></Route>
          <Route path="/users" element={<Users/>}></Route>
          <Route path="/adduser" element={<AddUser/>}></Route>
          <Route path="/updateusers" element={<UpdateUser/>}></Route>
           
      
    </Routes>
  </Router>
  
    </div>
  );
}

export default App;
