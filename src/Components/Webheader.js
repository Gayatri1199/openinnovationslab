import React, { Component } from "react";
import Logo from './images/logo.png'

class Webheader extends Component {
  render() {
    return (
      <div>
        <div className="header">
            <div className="container">
            <div className="menu">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <a className="navbar-brand" href="/#">
                <img src={Logo} alt="Logo"  className="img-fluid"/>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#">
                        Features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link disabled"
                        href="/#"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        Disabled
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/#"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        <button className="contact-now">Connect now</button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
            </div>          
        </div>
      </div>
    );
  }
}

export default Webheader;
