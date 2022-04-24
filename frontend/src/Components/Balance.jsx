import React from 'react'
import { useSelector } from 'react-redux'
import UserInfojs from './UserInfojs'

function Balance() {
    const { user } = useSelector(state => state.LoginData)
    return (
      <div className="container">
          <div className="row mt-5 pt-5">
          <UserInfojs user={user}/>
          </div>
      </div>
    )
}

export default Balance