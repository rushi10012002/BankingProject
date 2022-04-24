import React from 'react'
import { Link } from 'react-router-dom';

export default function TableAllUsers({data}) {
    return <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Sr.no</th>
          <th className='text-center' scope="col">Profile Photo</th>
          <th scope="col">Account No</th>
          <th scope="col">Name</th>
          <th scope="col">Email </th>
          <th scope="col">Address</th>
          <th scope="col">Update Info</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td className='text-center'><img src={`/${item.image}`} className="img-fluid rounded-lg-circle w-25" /></td>
              <td>KGKG-{item._id}</td>
              {/* <td>{item.id}</td> */}
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.Address}</td>
              <td> <Link to={`/update/info/${item._id}`}><button className="btn btn-dark">Update</button> </Link></td>
            </tr>
          );
  
        })}
  
      </tbody>
    </table>;
  }