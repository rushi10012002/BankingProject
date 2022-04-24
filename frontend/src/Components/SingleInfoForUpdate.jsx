import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { ActionForSingleUser } from '../Redux/Action/Login'
import UserInfojs from './UserInfojs'
function SingleInfoForUpdate({match}) {
  const dispatch=useDispatch()
  const {SingleData}=useSelector(state=>state.SingleUser)
  const [isLoading, setisLoading] = useState(false)
  const [object, setobject] = useState({
   
    name: '',
    email: '',
    phone: '',
    password: '',
    city: '',
    state: '',
    Address: '',

})
useEffect(() => {
 dispatch(ActionForSingleUser(match.params.id))
}, [dispatch])

 const HandleInputChange= (e)=>{
 setobject({...object,[e.target.name]:e.target.value })
 console.log(e.target.name,e.target.value)
 }

 const HandleSubmit=async(e)=>{
  e.preventDefault();
  setisLoading(true)
 
    setTimeout(async()=>{
      setisLoading(false)
      const {data}=await axios.post(`/${match.params.id}`,object)
    console.log(data)
    },2000)
    
   
    e.target.reset();
}
  return (
    <div className="container">
      <div className="row mt-5 pt-5">
        <div className="col-lg-6">
           {<UserInfojs user={SingleData}/>}
        </div>
        <div className="col-lg-6  ">
        <div className="card shadow-lg">
            <div className="card-body">
            <form onSubmit={HandleSubmit}>
                        
                        <div className="input-group  mb-3">
                            <span className="input-group-text   me-2 rounded-circle spanIconbg" id="basic-addon1"><i className="bi bi-person-circle iconSize"></i></span>
                            <input name='name' onChange={HandleInputChange} type="text" className="form-control ms-4 border-start-0" placeholder="Enter your name" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group  mb-3">
                            <span className="input-group-text   me-2 rounded-circle spanIconbg" id="basic-addon1"><i className="bi bi-envelope-fill iconSize"></i></span>
                            <input name='email' onChange={HandleInputChange} type="text" className="form-control ms-4 border-start-0" placeholder="Enter your email Id" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group  mb-3">
                            <span className="input-group-text   me-2 rounded-circle spanIconbg" id="basic-addon1"><i className="bi bi-telephone-fill iconSize"></i></span>
                            <input name='phone' onChange={HandleInputChange} type="number" className="form-control ms-4 border-start-0" placeholder="Enter your phone" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group  mb-3">

                            <span className="input-group-text   me-2 rounded-circle spanIconbg" id="basic-addon1"><i className="bi bi-key-fill iconSize"></i></span>

                            <input name='password' onChange={HandleInputChange} type="text" className="form-control ms-4 border-start-0" placeholder="Enter your password" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group  mb-3">
                            <span className="input-group-text   me-2 rounded-circle spanIconbg" id="basic-addon1"><i className="bi bi-caret-right-fill iconSize"></i></span>
                            <input name='city' onChange={HandleInputChange} type="text" className="form-control ms-4 border-start-0" placeholder="Enter your city" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group  mb-3">
                            <span className="input-group-text   me-2 rounded-circle spanIconbg" id="basic-addon1"><i className="bi bi-caret-right-fill iconSize"></i></span>
                            <input name='state' onChange={HandleInputChange} type="text" className="form-control ms-4 border-start-0" placeholder="Enter your state" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group  mb-3">
                            <span className="input-group-text   me-2 rounded-circle spanIconbg" id="basic-addon1"><i className="bi bi-geo-alt-fill iconSize"></i></span>
                            <input name='Address' onChange={HandleInputChange} type="text" className="form-control ms-4 border-start-0" placeholder="Enter your Address" aria-label="Username" aria-describedby="basic-addon1"   />
                        </div>
                        <button  type='submit' className="btn btn-dark w-100 mt-3">Update Client Info {isLoading && <div class="spinner-border border-3 ms-2" style={{width:"15px",height:"15px"}} role="status"></div>}</button>
                    </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleInfoForUpdate