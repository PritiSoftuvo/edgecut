import React from 'react'
import b1 from './../../src/assets/images/b1.jpg'
import b2 from './../../src/assets/images/b2.jpg'
import b3 from './../../src/assets/images/b3.jpg'

function Blog() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="textheading"> LATEST BLOG</h2>
        </div>

        <div className="container2">
          <div className="row">
            <div className="col-md-4">
              {/* <!-- Card Start 1--> */}
              <div className="card" style={{ width: '15rem' }}>
                <img src={b1} className="card-img-1" alt="..." />
                <div className="card-body">
                  <h5 className="card-title-blog">
                    Look even slightly
                    <br /> believable. If you are
                  </h5>
                  <p className="card-text">
                    alteration in some form, by injected humour, or randomised
                    words which don't look even slightly believable.
                  </p>

                  <button className="btn btn-primary">Read More</button>

                  {/* <a href="#" className="btn btn-primary">Read More</a> */}
                </div>
              </div>
            </div>
            {/* <!-- Card End --> */}

            <div className="col-md-4">
              {/* <!-- Card Start 2--> */}
              <div className="card" style={{ width: '15rem' }}>
                <img src={b2} className="card-img-1" alt="..." />
                <div className="card-body">
                  <h5 className="card-title-blog">
                    Look even slightly
                    <br /> believable. If you are
                  </h5>
                  <p className="card-text-blog">
                    alteration in some form, by injected humour, or randomised
                    words which don't look even slightly believable.
                  </p>
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
            {/* <!-- Card End --> */}

            <div className="col-md-4">
              {/* <!-- Card Start 3--> */}
              <div className="card" style={{ width: '15rem' }}>
                <img src={b3} className="card-img-1" alt="..." />
                <div className="card-body">
                  <h5 className="card-title-blog">
                    Look even slightly
                    <br />
                    believable. If you are
                  </h5>
                  <p className="card-text">
                    alteration in some form, by injected humour, or randomised
                    words which don't look even slightly believable.
                  </p>
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
            {/* <!-- Card End --> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
