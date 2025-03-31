import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import slikl from './../../src/assets/images/slikl.png'

function Section1() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <div className="container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="row">
              <div className="col-lg-6">
                <h3 className="SecHeading">
                  FOR ALL YOUR <br /> FURNITURE NEED
                </h3>
                <p className="sectiondata">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  <br /> Minus quidem maiores perspiciatis, illo maxime
                  <br /> voluptatem a itaque suscipit.
                </p>

                <button className="btn1">Contact Us</button>
                <button className="btn2">About Us</button>
              </div>

              <div className="col-lg-6">
                <img src={slikl} className="sliderImg " alt="asbbb" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-lg-6">
                <h3 className="SecHeading">
                  FOR ALL YOUR <br /> FURNITURE NEED
                </h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  <br /> Minus quidem maiores perspiciatis, illo maxime
                  <br /> voluptatem a itaque suscipit.
                </p>

                <button className="btn1">Contact Us</button>
                <button className="btn2">About Us</button>
              </div>

              <div className="col-lg-6">
                <img src={slikl} className="sliderImg " alt="asbbb" />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="row">
              <div className="col-lg-6">
                <h3 className="SecHeading">
                  FOR ALL YOUR <br /> FURNITURE NEED
                </h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  <br /> Minus quidem maiores perspiciatis, illo maxime
                  <br /> voluptatem a itaque suscipit.
                </p>

                <button className="btn1">Contact Us</button>
                <button className="btn2">About Us</button>
              </div>

              <div className="col-lg-6">
                <img src={slikl} className="sliderImg " alt="asbbb" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default Section1
