import React, { useContext, useEffect, useState } from 'react'
import '../css/Header.css'
import {Link,useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ActionForLogout } from '../Redux/Action/Login'
 
function NavBar({userData}) {
 const dispatch=useDispatch()
  const {user}=useSelector(state=>state.LoginData)
  const history=useHistory()
  console.log(userData);
  return (
    <div className="container-fluid position-fixed top-0 " style={{zIndex:"99"}}>
        <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light  shadow headerBg">
  <div className="container">
    <a className="navbar-brand text-dark NavText" ><h4><strong>KGKG BANK</strong></h4></a>
    <button className="navbar-toggler btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span> */}
      <i className="bi bi-menu-button-wide text-dark"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto text-sm-center text-center">
        <li className="nav-item">
          <Link to="/" className="nav-link active NavText mx-3 headerHover  " aria-current="page" href="#">Home</Link>
        </li>
        {
         user?. success ?<li className="nav-item">
          <span className="nav-link active NavText mx-3 my-md-0 my-3 headerHover  " data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">{user?.name} <i className="bi bi-caret-down-fill"></i></span>
        </li>:<li className="nav-item ">
          <Link to='/login'className="nav-link active NavText mx-3 headerHover  " >LOGIN</Link>
        </li>
        }
        
         
        
      </ul>
    </div>
  </div>
</nav>
 

<div class="offcanvas offcanvas-end" style={{background:"rgba(135, 207, 235, 1.921)"}} tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
  <strong className='text-uppercase text-dark'> <strong>kgkg banking chikalathana aurangabad 431001</strong></strong>

    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body " >
        <h1 className='subheading mb-5 text-white'> <strong>Menu </strong></h1>
        <ul class="list-group text-start">
        <Link to={'/transuction/History'} className='text-dark' style={{textDecoration:"none"}}><li class="list-group-item my-2 border-0 shadow-lg py-3 text-uppercase">transaction history</li></Link>
        <Link to="/transferMoney" className='text-dark'   style={{textDecoration:"none"}}>  <li class="list-group-item my-2 border-0 shadow-lg py-3 text-uppercase">transfer money </li></Link>
   <Link to="/balance"><li class="list-group-item my-2 border-0 shadow-lg py-3 text-uppercase text-dark" style={{textDecoration:"none"}}>Balance</li></Link>
 {userData?.IsAdmin &&<>
  <Link to="/add/clients" className='text-dark' style={{textDecoration:"none"}}><li class="list-group-item my-2 border-0 shadow-lg py-3 text-uppercase"> New client</li></Link>
  <Link to="/TransAllHistory" className='text-dark' style={{textDecoration:"none"}}> <li class="list-group-item my-2 border-0 shadow-lg py-3 text-uppercase">All Transuction</li></Link>
  <Link to="/AllUser" className='text-dark' style={{textDecoration:"none"}}> <li class="list-group-item my-2 border-0 shadow-lg py-3 text-uppercase">Search Client</li></Link>
 </>}
  <li class="list-group-item my-2 border-0 shadow-lg py-3 text-uppercase text-danger"
  onClick={()=>{
    dispatch(ActionForLogout())
   history.push('/login')
  }}>Logout <i className="bi bi-box-arrow-right float-end"></i></li>
</ul>
  </div>
</div>
        </div>
    </div>
  )
}

export default NavBar