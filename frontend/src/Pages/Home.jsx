import React, { useEffect } from 'react'
import Aos from 'aos'
import '../css/Home.css'
function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div className="container-fluid ">
      <div className="row rowMain" >
        <div className="card-group  mt-sm-5 pt-sm-5 mt-1 pt-1">
          <div className="card border-0 bgcolor" data-aos="fade-right">
            <div className="card-body text-center d-flex flex-column justify-content-center align-items-center">
              <h1 className='heading'>KGKG Banking</h1>
              <span className='text-uppercase text-white'>
               <strong> chikalthana , aurangabad maharashtra</strong>
              </span>
            </div>
          </div>
          <div className="card border-0 bgcolor" data-aos="fade-left">
            <div className="card-body text-center d-flex flex-column align-items-center justify-content-center">
               
                <h2  className='subheading' style={{color:"white"}}>Features</h2>
                <ul className='list-group text-start text-white text-capitalize'>
                  <li className="list-group-item bg-transparent border-0 text-white"> <i className="bi bi-check-lg"></i> home and car loans</li>
                  <li className="list-group-item bg-transparent border-0 text-white"><i className="bi bi-check-lg"></i> Lorem ipsum dolor sit.</li>
                  <li className="list-group-item bg-transparent border-0 text-white"><i className="bi bi-check-lg"></i> Lorem ipsum dolor sit amet consectetur.</li>
                  <li className="list-group-item bg-transparent border-0 text-white"><i className="bi bi-check-lg"></i> Lorem, ipsum dolor.</li>
                </ul>
               
            </div>
          </div>
        </div>
      </div>
      <div className="row rowMain2  py-5">
        <h1 className='text-center text-uppercase'> <strong>blog</strong></h1>
        <div className="col-lg-4 ">
          <div className="card cardSecondRow p-3 my-3 mx-1 shadow-lg" data-aos="fade-right">
            <div className="card-body">
              <img  src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="img-fluid card-img-top" />
              <strong>Lorem, ipsum dolor.</strong>
              <p style={{textAlign:"justify"}}>Lorem Ipsum is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia explicabo iusto nam inventore necessitatibus, aliquam architecto beatae adipisci quibusdam quam est, cum eum dicta a fugit accusamus non error dolorem. simply dummy text of the printing and typesetting industry. </p>
              <button className="btn btn-dark my-2 text-capitalize">read more</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 ">
          <div className="card cardSecondRow p-3 my-3 mx-1 shadow-lg" data-aos="fade-up">
            <div className="card-body">
              <img src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="img-fluid card-img-top" />
              <strong>Lorem, ipsum dolor.</strong>
              <p style={{textAlign:"justify"}}>Lorem Ipsum is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia explicabo iusto nam inventore necessitatibus, aliquam architecto beatae adipisci quibusdam quam est, cum eum dicta a fugit accusamus non error dolorem. simply dummy text of the printing and typesetting industry. </p>
              <button className="btn btn-dark my-2 text-capitalize">read more</button>

            </div>
          </div>
        </div>
        <div className="col-lg-4 ">
          <div className="card cardSecondRow p-3 my-3 mx-1 shadow-lg" data-aos="fade-left">
            <div className="card-body">
              <img src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="img-fluid card-img-top" />
              <strong>Lorem, ipsum dolor.</strong>
              <p style={{textAlign:"justify"}}>Lorem Ipsum is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia explicabo iusto nam inventore necessitatibus, aliquam architecto beatae adipisci quibusdam quam est, cum eum dicta a fugit accusamus non error dolorem. simply dummy text of the printing and typesetting industry. </p>
              <button className="btn btn-dark my-2 text-capitalize">read more</button>

            </div>
          </div>
        </div>
      </div>
      <div className="row py-5  rowMain3">
        <div className="col-lg-8 offset-lg-2 py-5">
          <div className="card-group border-0" data-aos="fade-right">
            <div className="card border-0 mx-3 p-2 shadow-lg border-light">
              <div className="card-body text-center">
                <span>starting from</span> <br />
                 <h4> <strong>3%</strong></h4>
                 <span className='text-uppercase'>saving</span>
              </div>
            </div>
            <div className="card border-0 mx-3 p-2 shadow-lg border-light" data-aos="fade-right">
              <div className="card-body text-center">
                <span>Up to</span> <br />
                 <h4> <strong>5.5%</strong></h4>
                 <span className='text-uppercase'>fixed deposit</span>
              </div>
            </div>
            <div className="card border-0 mx-3 p-2 shadow-lg border-light" data-aos="fade-right">
              <div className="card-body text-center">
                <span>starting from</span> <br />
                 <h4> <strong>10.5%</strong></h4>
                 <span className='text-uppercase'>personal loan</span>
              </div>
            </div>
            <div className="card border-0 mx-3 p-2 shadow-lg border-light" data-aos="fade-right">
              <div className="card-body text-center">
                <span>starting from</span> <br />
                 <h4> <strong>11.3%</strong></h4>
                 <span className='text-uppercase'>home loan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="row">
         <div className="col text-white text-center bg-black text-capitalize py-3">
          @ all are reserve
         </div>
       </div>
    </div>
  )
}

export default Home