import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionForTransHistoryAll } from '../Redux/Action/TransHistory'
import AllUsers from './AllUsers'

function TransAllHistory() {
  const dispatch = useDispatch()
  const { TransDataAll } = useSelector(state => state.allHistory)
  useEffect(() => {
    dispatch(ActionForTransHistoryAll())
  }, [dispatch])

  return (
    <div className="container">
      <div className="row mt-5 pt-5">
        <div className="col-lg-8 offset-lg-2">
          <div className="card shadow-lg border-0">
            <div className="card-body table-responsive">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">Sr.no</th>
                    <th scope="col">Sender Account</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Acount Type</th>
                    <th scope="col">Reciver Account</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    TransDataAll?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>KGKG-{item.id}</td>
                          <td>$ {item.amount}</td>
                          <td>{item.AcountType}</td>
                          <td>KGKG-{item.ReciverAccountNumber}</td>
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

export default TransAllHistory