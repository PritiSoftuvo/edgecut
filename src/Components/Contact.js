import React from 'react'

function Contact() {
  return (
    <>
    
        <div className="row">
          <form className="contactForm">
            <div className="form">
              <h2 className="Comntact-form">CONTACT US</h2>
              <label for="exampleInputName" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>

            <div>
              <label for="exampleInputNumber" className="form-label">
                Your Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPhone"
                aria-describedby="ContactNumber"
              />
            </div>

            <div>
              <label for="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              SEND
            </button>
          </form>

          <div className="navigation" style={{ width: '100%' }}>
            <iframe
              title="abc"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.620146742221!2d76.76725662620917!3d30.729077424586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedaf8af0bf5b%3A0x6b682f0ff44e92f8!2sSector%2022C%2C%20Sector%2022%2C%20Chandigarh%2C%20160022!5e0!3m2!1sen!2sin!4v1742985849260!5m2!1sen!2sin"
              style={{
                width: '1500',
                height: '500',
                border: 0,
                loading: 'lazy',
                referrerpolicy: 'no-referrer-when-downgrade',
              }}></iframe>
          </div>
       </div>
    </>
  )
}

export default Contact
