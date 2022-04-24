import React from 'react'

export default function UserInfojs({user}) {
    return <div className="card shadow-lg">
      <div className="car-body">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-10 offset-1">
            <div className="card  border-0">
              <div className="card-body text-center">
                <h3 className="text-center textColor"><strong>User profile</strong></h3>
                <img src={`/${user?.image}`} alt="" style={{
                  width: '50%',
                  height: '50% ', objectFit: "contain"
                }} className="img-fluid rounded-circle " />
                <hr />
                <p className='text-center textColor'>
                  <strong>name:</strong> {user?.name} <br />
                  <strong>email:</strong> {user?.email} <br />
                 <strong> Balance:</strong> <span className="bg-primary text-white px-3">$ {user?.Balance}</span> <br />
                  <strong>phone:</strong> {user?.phone} <br />
                </p>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
