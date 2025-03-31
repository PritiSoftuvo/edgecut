import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand me-auto">
              <strong>EDGECUT</strong>
            </Link>

            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active">
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link max-lg-2">
                      ABOUT US
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link max-lg-2">
                      FURNITURE
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link max-lg-2">
                      BLOG
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link max-lg-2">
                      CONTACT US
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link to="/" class="login-button">
              LOGIN
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
