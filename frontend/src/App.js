import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
 
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import FormAddClients from './Components/FormAddClients';
import { createContext, useEffect, useState } from 'react';
import TransferMoney from './Components/TransferMoney';
import TransHistory from './Components/TransHistory';
import TransAllHistory from './Components/TransAllHistory';
import AllUsers from './Components/AllUsers';
import Balance from './Components/Balance';
import SingleInfoForUpdate from './Components/SingleInfoForUpdate';

 
function App() {
  const [dataUser, setdataUser] = useState({})
  useEffect(() => {
    localStorage.getItem('userInfo') && setdataUser(JSON.parse(localStorage.getItem('userInfo')))
  }, [])
  console.log(dataUser);
  return (
     
    <Router forceRefresh  >
    <NavBar userData={dataUser}/>
    <Switch>
 <Route path={"/"} exact component={Home}/>
 <Route path={"/login"}  component={LoginPage}/>
 <Route path="/add/clients"  component={FormAddClients}/>
 <Route path="/transuction/History"  component={TransHistory}/>
 <Route path="/transferMoney"  component={TransferMoney}/>
 <Route path="/TransAllHistory"  component={TransAllHistory}/>
 <Route path="/AllUser"  component={AllUsers}/>
 <Route path="/balance"  component={Balance}/>
 <Route path="/update/info/:id"  component={SingleInfoForUpdate}/>
   
    </Switch>
    
    </Router>
   
  );
}

export  default App
