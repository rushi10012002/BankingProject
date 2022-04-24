import React, { useState } from 'react'
import '../css/Login.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { ActionForLoginUser } from '../Redux/Action/Login'
function LoginPage({history}) {
  const dispatch=useDispatch()
  const [object, setobject] = useState({
    email: '',
    password: ''
  })
  const HandleInputChange= (e)=>{
    setobject({...object,[e.target.name]:e.target.value })
    console.log(e.target.name,e.target.value)
    }
    const HandleSubmit= async(e)=>{
//   e.preventDefault();
// const {data}=await axios.post('http://localhost:5000/login',object)
// data.data.success && localStorage.setItem('userInfo',JSON.stringify(data.data))
dispatch(ActionForLoginUser(object))
// localStorage.setItem('userInfo',JSON.stringify(data.data))
history.push('/')
// console.log(data.data)
alert()
  e.target.reset();
    }
  return (
    <div className="container-fluid">
      <div className="row   d-flex   align-items-center" style={{width:"100%",height:"100vh"}}>
      <div className="col-lg-6 col-md-6 col-12 offset-lg-3 offset-md-3">
      <div className="card shadow-lg   border cardLogina"  >
        
        <div className="card-body text-center py-5 px-5" >
        <strong className='text-uppercase'> <strong>kgkg banking chikalathana aurangabad 431001</strong></strong>
        <h1 className='subheading mb-5'> <strong>Login User</strong></h1>
         
          <form onSubmit={HandleSubmit}>
          <div className="input-group  mb-3">
            <span className="input-group-text   me-2 rounded-circle spanIconbg" id="basic-addon1"><i className="bi bi-person-circle iconSize"></i></span>
            <input autoFocus onChange={HandleInputChange} name="email" type="text" className="form-control ms-4 border-start-0" placeholder="Enter your email Id" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text    me-2 rounded-circle spanIconbg" id="basic-addon1">
            <i className="bi bi-key-fill iconSize"></i>
            </span>
            <input  onChange={HandleInputChange} name="password" type="password" className="form-control ms-4 border-start-0" placeholder="Enter your Password" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <button type='submit' className="btn btn-dark text-uppercase mt-4 w-100">Login</button>
          </form>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default LoginPage