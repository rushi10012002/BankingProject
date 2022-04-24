import React, { useState } from 'react'
import axios from 'axios'
function FormAddClients() {
    // const [message, setmessage] = useState('oo')

    const [object, setobject] = useState({
        image: [],
        name: '',
        email: '',
        phone: '',
        password: '',
        city: '',
        state: '',
        Address: '',

    })
    const HandleInputChange = (e) => {
        setobject({ ...object, [e.target.name]: e.target.value })
        console.log(e.target.name, e.target.value)
    }
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in object.image) {
            formData.append("image", object.image[key])
        }
        formData.append('name', object.name)
        formData.append('email', object.email)
        formData.append('phone', object.phone)
        formData.append('password', object.password)
        formData.append('city', object.city)
        formData.append('state', object.state)
        formData.append('Address', object.Address)
        console.log(formData)
        const { data } = await axios.post('/add/user', formData)
        console.log(object)
        // console.log(result);

        e.target.reset();
    }
    return (
        <div className="container">
            <div className="row mt-5 pt-5">
                <div className="col-lg-6 col-12 offset-lg-3 text-center  ">

                    <div className="card shadow-lg">
                        <div className="card-body bg-transparent" >
                            <h3 className=''>Add New Client</h3>
                        </div>
                        <div className="card-body">

                            <form onSubmit={HandleSubmit}>
                                <div className="input-group  mb-3">
                                    <span className="input-group-text   me-2 rounded-circle spanIconbg" id="basic-addon1"><i className="bi bi-cloud-plus-fill iconSize"></i></span>
                                    <input name='image' onChange={(e) => {
                                        setobject({ ...object, image: e.target.files })
                                        console.log(object.image);
                                    }} autoFocus type="file" className="form-control ms-4 border-start-0" placeholder="Enter your name" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
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
                                    <input name='Address' onChange={HandleInputChange} type="text" className="form-control ms-4 border-start-0" placeholder="Enter your Address" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <button type='submit' className="btn btn-dark w-100 mt-3">Add Client</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormAddClients