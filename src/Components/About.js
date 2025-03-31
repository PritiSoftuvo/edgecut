import React from 'react'
import about from './../../src/assets/images/about-img.png'
function About() {
  return (
    <>
      <div className="container">
        <div className="row-3">
          <div className="col-lg-6">
            <img src={about} class="aboutusImg img-fluid" alt="asn" />
          </div>

          <div className="col-lg-6">
            <div className='allaboutus'>
              <h2 class="AboutHeading">ABOUT US</h2>
              <p className="aboutdetail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti
                <br /> dolorem eum consequuntur ipsam repellat dolor soluta
                aliquid
                <br />
                laborum, eius odit consectetur vel quasi in quidem, eveniet ab
                est
                <br /> corporis tempore.
              </p>
              <button class="AboutBtn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
