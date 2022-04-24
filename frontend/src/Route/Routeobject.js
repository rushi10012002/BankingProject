import Home from '../Pages/Home';
import LoginPage from '../Pages/LoginPage';
import FormAddClients from '../Components/FormAddClients';
import TransferMoney from '../Components/TransferMoney';
import React from 'react'
import { Route} from 'react-router-dom'

function Routeobject() {
     const object=[{
        path:'/',
        exact:true,
        component:<Home/>
    },
    {
        path:'/login',
        exact:true,
        component:<LoginPage/>
    },
    {
        path:'/add/clients',
        exact:true,
        component:<FormAddClients/>
    }
    ,{
        path:'/transferMoney',
        exact:true,
        component:<TransferMoney/>
    }]
    
  return (
    object?.map((item,i)=>{
        return(
         <Route key={1} path={item.path} exact component={item.component}/>
        )
      })
  )
}

export default Routeobject