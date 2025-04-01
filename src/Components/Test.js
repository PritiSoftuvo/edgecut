import React from 'react'
import client from './../../src/assets/images/client.jpg'
import 'font-awesome/css/font-awesome.min.css';


function Test() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="testimonial-heading"> TESTIMONIAL</h2>
          </div>
        </div>
          
            <div className='row-client row'>
              <div className='col-lg-4'>
                <img src={client} class="clientImg" alt="abc" />
              </div>

              <div className='col-lg-8' >
                <h2 className="invertedComma"><i className="fa fa-quote-left" aria-hidden="true"></i></h2>
                <h2 className="clientName">Siaalya</h2>

                <p className="data">
                  It is a long established fact that a reader will bedistracted by
                  the readable cIt is a long established factthat a reader will be
                  distracted by the readable c
                </p>


              </div>
            


          </div>        
      </div>
    </>
  )
}

export default Test;
