import React, { Component } from 'react'
import Logo from './images/footer-logo.png'

export class Footer extends Component {
  render() {
    return (
      <div className='footer mt-5 p-5'>
        <div className="container">
            <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                    <div className="footer-info">
                        <img src={Logo} alt="Logo" className='img-fluid'/>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrat.</p>
                        <ul className='social-links'>
                            <a href="/#" className='fb-icon'>
                            <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="/#" className='linkedin-icon'>
                            <i class="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="/#" className='finsta-icon'>
                            <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="/#" className='twitter-icon'>
                            <i class="fa-brands fa-twitter"></i>
                            </a>
                        </ul>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                    <div className="footer-links">
                        <h4>SERVICES</h4>
                        <ul>
                            <li>
                            <i class="fa-solid fa-chevrons-right"></i>
                                <a href='/#'>
                                    Service 1
                                </a>
                            </li>
                            <li>
                            <i class="fa-solid fa-chevrons-right"></i>
                                <a href='/#'>
                                    Service 1
                                </a>
                            </li>
                            <li>
                            <i class="fa-solid fa-chevrons-right"></i>
                                <a href='/#'>
                                    Service 1
                                </a>
                            </li>
                            <li>
                            <i class="fa-solid fa-chevrons-right"></i>
                                <a href='/#'>
                                    Service 1
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                    <div className="footer-links">
                        <h4>LINKS</h4>
                        <ul>
                            <li>
                            <i class="fa-solid fa-chevrons-right"></i>
                                <a href='/#'>
                                    Home
                                </a>
                            </li>
                            <li>
                            <i class="fa-solid fa-chevrons-right"></i>
                                <a href='/#'>
                                    About
                                </a>
                            </li>
                            <li>
                            <i class="fa-solid fa-chevrons-right"></i>
                                <a href='/#'>
                                    Services
                                </a>
                            </li>
                            <li>
                            <i class="fa-solid fa-chevrons-right"></i>
                                <a href='/#'>
                                    Gallery
                                </a>
                            </li>
                            <li>
                            <i class="fa-solid fa-chevrons-right"></i>
                                <a href='/#'>
                                   Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                    <div className="footer-links">
                        <h4>HAVE A QUESTIONS ?</h4>
                        <ul>
                            <li>
                            <i class="fa-solid fa-chevrons-right"></i>
                                <a href='/#'>
                                    Plot No1 ,Hari Naagar <br /> Jodhpur, Raj
                                </a>
                            </li>
                            <li>
                            <i class="fa-solid fa-chevrons-right"></i>
                                <a href='/#'>
                                    +91 9032888884
                                </a>
                            </li>
                            <li>
                            <i class="fa-solid fa-chevrons-right"></i>
                                <a href='/#'>
                                    Myid@Gmail.com
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Footer