import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ActionForUser } from '../Redux/Action/AllUsers';
import TableAllUsers from './TableAllUsers';
function AllUsers() {

  const dispatch = useDispatch()
  const { AllUsersDatas } = useSelector(state => state.AllUser)
  const [dataAll, setdataAll] = useState([])
  useEffect(async () => {
    dispatch(ActionForUser())
    await setdataAll(AllUsersDatas)
  }, [dispatch])

  return (

    <div className="container-fluid">
      <div className="row mt-5 pt-5">
        <div className="col-lg-10 offset-lg-1">
          <div className="card shadow-lg  border-0">
            <div className="card-body table-responsive">
             {
               <TableAllUsers data={AllUsersDatas} />
             }
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AllUsers


