import React from 'react'
import f1 from './../../src/assets/images/f1.png'
import f2 from './../../src/assets/images/f2.png'
import f3 from './../../src/assets/images/f3.png'
import f4 from './../../src/assets/images/f4.png'
import f5 from './../../src/assets/images/f5.png'
import f6 from './../../src/assets/images/f6.png'

function Cards() {
  return (
    <>
      <section>
        <div className="card-data-container">
          <h1>Our Furniture</h1>
          <p>
            which don't look even slightly believable. If you are going to use a
            passage of Lorem Ipsum, you need to be sure there isn't an
          </p>

          <section className="card-container">
            <div className="row">
              <div className="col-md-4">
                {/* <!-- Card Start 1--> */}
                <div className="card">
                  <img src={f1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Brown Chair Design</h5>
                    <p className="card-text">$ 100.00</p>
                    <button className="btn btn-primary">Buy Nw</button>
                  </div>
                </div>
                {/* <!-- Card End --> */}
              </div>

              <div className="col-md-4">
                {/* <!-- Card Start 2--> */}
                <div className="card">
                  <img src={f2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Double Bed Design</h5>
                    <p className="card-text">$ 200.00</p>
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
                {/* <!-- Card End --> */}
              </div>

              <div className="col-md-4">
                {/* <!-- Card Start 3--> */}
                <div className="card">
                  <img src={f3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">House Chair Design</h5>
                    <p className="card-text">$ 200.00</p>
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
                {/* <!-- Card End --> */}
              </div>
            </div>
            {/* <!-- row end --> */}

            {/* <!-- start Second row -->  */}

            <div className="row">
              <div className="col-md-4">
                {/* <!-- Card Start 4--> */}
                <div className="card">
                  <img src={f4} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Brown Table Design</h5>
                    <p className="card-text">$ 100.00</p>
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
                {/* <!-- Card End --> */}
              </div>

              <div className="col-md-4">
                {/* <!-- Card Start 5--> */}
                <div className="card">
                  <img src={f5} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Blue Chair Design</h5>
                    <p className="card-text">$ 200.00</p>
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
                {/* <!-- Card End --> */}
              </div>

              <div className="col-md-4">
                {/* <!-- Card Start 6--> */}
                <div className="card">
                  <img src={f6} className="card-img-top" alt="..." />

                  <div className="card-body">
                    <h5 className="card-title">Dressing Table</h5>
                    <p className="card-text">$ 200.00</p>

                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
                {/* <!-- Card End --> */}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Cards
