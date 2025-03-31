import React from 'react'
import client from './../../src/assets/images/client.jpg'

function Test() {
  return (
    <>
      <section>
        <div className="testimonial-container">
          <h2 className="testimonial-heading"> TESTIMONIAL</h2>
        </div>

        <section>
          <div className="client">
            <img src={client} class="clientImg" alt="abc" />
            <h2 className="invertedComma">"</h2>
            <h2 className="clientName">Siaalya</h2>

            <p className="data">
              It is a long established fact that a reader will bedistracted by
              the readable cIt is a long established factthat a reader will be
              distracted by the readable c
            </p>
          </div>
        </section>
      </section>
    </>
  )
}

export default Test
