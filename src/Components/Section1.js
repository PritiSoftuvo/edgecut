import React from 'react'
import slikl from './../../src/assets/images/slikl.png'

function Section1() {
  return (
    <>
      <div className="container pt-5">
        <section className="">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={slikl} className="d-block" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h2 className="carousel_capital">
                    For All Your
                    <br />
                    Furniture Needs
                  </h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    <br />
                    Minus quidem maiores perspiciatis, illo maxime
                    <br />
                    voluptatem a itaque suscipit.
                  </p>
                  <button className="btn1">Contact Us</button>
                  <button className="btn2">About Us</button>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={slikl} className="d-block" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={slikl} className="d-block" alt="sssssssssss" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev">
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next">
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Section1
