import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ActionForTransHistory } from '../Redux/Action/TransHistory'
import UserInfojs from './UserInfojs'

function TransHistory() {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.LoginData)
  const { TransData } = useSelector(state => state.TransuctionHistory)
  useEffect(() => {
    dispatch(ActionForTransHistory({ id: user.id }))
  }, [dispatch])

  return (

    <div className="container">
      <div className="row mt-sm-5 pt-sm-5 mt-5 pt-1">
        <div className="col-lg-8 offset-lg-2">
        
          {<UserInfojs user={user} />}
          <div className="card shadow-lg my-3 border-0">
            <div className="card-body table-responsive">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">Sr.no</th>
                    <th scope="col">Reciver Account</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Acount Type</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    TransData?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>KGKG-{item.ReciverAccountNumber}</td>
                          
                          <td>$ {item.amount}</td>
                          <td>{item.AcountType}</td>
                        </tr>
                      )

                    })
                  }

                </tbody>
              </table>
            </div>
          </div>
         
        </div>
      </div>
    </div>

  )
}

export default TransHistory


