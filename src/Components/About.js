import React from 'react'
import about from './../../src/assets/images/about-img.png'
function About() {
  return (
    <>
      <section>
        <div class="AboutUs-container">
          <img src={about} class="aboutusImg" alt="asn" />

          <div class="section3">
            <h2 class="AboutHeading">ABOUT US</h2>
            <p class="AboutSection">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              <br />
              Minus quidem maiores perspiciatis, illo maxime
              <br />
              voluptatem a itaque suscipit.
            </p>
            <button class="AboutBtn">Read More</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
