import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionForTransfer } from '../Redux/Action/TransHistory'
function TransferMoney() {
    const { user } = useSelector(state => state.LoginData)
    const dispatch = useDispatch()
    // const { id, name, image,email, Balance,phone,success,token,IsAdmin,message }=useContext(Asdcontext)
    const [isLoading, setisLoading] = useState(false)
    const [object, setobject] = useState({
        id: user.id,
        amount: '',
        ReciverAccountNumber: '',
        AcountType: '',
    })
    const HandleChange = (e) => {
        setobject({ ...object, [e.target.name]: e.target.value })
    }
    const HandleSubmit = async (e) => {
        e.preventDefault();
        setisLoading(true)

        setTimeout(async () => {
            setisLoading(false)
            console.log(object);
            console.log(user.id, user.Balance)
            // const result = await axios.post('http://localhost:5000/tranfer', object)
            // const { data } = await axios.post('http://localhost:5000/balance/Update', {id:user.id,Balance: user.Balance-object.amount })
            // const result1 = await axios.post('http://localhost:5000/balance/Update', {id:user.id,Balance: user.Balance-object.amount })
            // console.log(data);
            const Upobject = { id: user.id, Balance: +user.Balance - object.amount }
            const objectReciver = { amount: object.amount, ReciverAccountNumber: object.ReciverAccountNumber }
            dispatch(ActionForTransfer(object, Upobject, objectReciver))
        }, 3000)
        e.target.reset();
    }
    return (
        <div className="container">
            <div className="row mt-5 pt-5">
                {/* {JSON.stringify(user)} */}
                <div className="col-lg-6 offset-lg-3">
                    <div className="card shadow-lg">
                        <div className="card-body text-center">
                            <h1 className="text-center"><strong>Transfer Money</strong></h1>
                            {isLoading && <span className="text-success text-uppercase "> <strong>Money Transfer Successfully</strong></span>}
                            <form onSubmit={HandleSubmit}>
                                <div className="input-group  my-3">
                                    <span className="input-group-text   me-2 rounded-circle spanIconbg" id="basic-addon1"><i className="bi bi-currency-dollar iconSize"></i></span>
                                    <input name='amount' onChange={HandleChange} autoFocus type="number" className="form-control ms-4 border-start-0" placeholder="Enter your amount" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group  my-3">
                                    <span className="input-group-text   me-2 rounded-circle spanIconbg" id="basic-addon1"><i className="bi bi-person-circle iconSize"></i></span>
                                    <input name='ReciverAccountNumber' onChange={HandleChange} type="text" className="form-control ms-4 border-start-0" placeholder="Enter the reciver Account Number" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group  my-3">
                                    <span className="input-group-text   me-2 rounded-circle spanIconbg" id="basic-addon1"><i className="bi bi-check2-square iconSize"></i></span>
                                    <select onChange={HandleChange} className='form-control ms-4' name="AcountType" id="">
                                        <option value="" >select Option</option>
                                        <option value="saving">saving</option>
                                        <option value="current">current</option>
                                    </select>
                                </div>
                                <button className="btn btn-dark w-100 text-upercase my-3" disabled={+user.Balance > object.amount ? false : true}><strong>proceed</strong> {isLoading && <div class="spinner-border border-3 ms-2" style={{ width: "15px", height: "15px" }} role="status">

                                </div>} </button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransferMoney