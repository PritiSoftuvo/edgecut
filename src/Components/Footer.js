import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div classNameName="container">
            <div classNameName="row">
                <div className="footercontainer my-5">

<footer className=" text-center text-lg-start" style={{backgroundColor: "#23242a"}}>
  {/* <!-- Grid container --> */}
  <div className="container p-4">
    {/* <!--Grid row--> */}
    <div className="row mt-4">
      {/* <!--Grid column--> */}
      <div className="footer-text col-lg-4 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-4">About company</h5>

        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti.
        </p>

        <p>
          Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias.
        </p>

        <div className="mt-4">
          {/* <!-- Facebook --> */}
          <Link to="" type="button" className="icon btn btn-floating btn-warning btn-lg"><i className="fa fa-facebook-f"></i></Link>
          {/* <!-- Dribbble --> */}
          <Link to="/" type="button" className="icon btn btn-floating btn-warning btn-lg"><i className="fa fa-dribbble"></i></Link>
          {/* <!-- Twitter --> */}
          <Link to="/" type="button" className="icon btn btn-floating btn-warning btn-lg" ><i className="fa fa-twitter"></i></Link>
          {/* <!-- Google + --> */}
          {/* <Link to="/" type="button" className="btn btn-floating btn-warning btn-lg"><i className="fa fa-google-plus-g"></i></Link> */}
          {/* <!-- Linkedin --> */}
        </div>
      </div>
      {/* <!--Grid column--> */}

      {/* <!--Grid column--> */}
      <div className="footer-text col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

        <div className="form-outline form-white mb-4">
          <input type="text" id="formControlLg" className="input-box"/>
          <label className="form-label" for="formControlLg">Search</label>
        <div className="form-notch"><div className="form-notch-leading" style={{width: "9px"}}></div>
        <div className="form-notch-middle" style={{width: "48.8px"}}></div>
        <div className="form-notch-trailing"></div>
        </div>
        </div>

        <ul className="fa-ul" style={{marginLeft: "1.65em"}}>
          <li className="mb-3">
            <span className="fa-li"><i className="fa fa-home"></i></span><span className="ms-2">Chandigarh, Chandigarh 10012, India</span>
          </li>
          <li className="mb-3">
            <span className="fa-li"><i className="fa fa-envelope"></i></span><span className="ms-2">info@e.com</span>
          </li>
          <li className="mb-3">
            <span className="fa-li"><i className="fa fa-phone"></i></span><span className="ms-2">+ 01 234 567 88</span>
          </li>
          <li className="mb-3">
            <span className="fa-li"><i className="fa fa-print"></i></span><span className="ms-2">+ 01 234 567 89</span>
          </li>
        </ul>
      </div>
      {/* <!--Grid column--> */}

      {/* <!--Grid column--> */}
      <div className="footer-text col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-4">Opening hours</h5>

        <table className="table text-center text-white">
          <tbody className="font-weight-normal">
            <tr>
              <td>Mon - Thu:</td>
              <td>8am - 9pm</td>
            </tr>
            <tr>
              <td>Fri - Sat:</td>
              <td>8am - 1am</td>
            </tr>
            <tr>
              <td>Sunday:</td>
              <td>9am - 10pm</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <!--Grid column--> */}
    </div>
    {/* <!--Grid row--> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    © 2020 Copyright:
    <Link to="/" className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</Link>
  </div>
   {/* Copyright */}
</footer>

</div>

                </div>
                
            </div>
    )
}

export default Footer;