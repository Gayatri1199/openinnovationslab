import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import KidEvents from './images/kids-events.jpg'

export class Testimonails extends Component {
  render() {
    return (
      <div className='testimonials mt-5'>
        <div className="row g-0 align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                <div className="slider">
                   <h2 className='text-center'>What they Say??</h2> 
                <OwlCarousel
            className='owl-theme'
            items="1"
            autoplay
            dots
            loop
            >
                <div className="item">
                    <div className="profile-pic">
                        <img src={KidEvents} className="img-fluid" alt="testimonials"/>
                    </div>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                </div>
                <div className="item">
                    <div className="profile-pic">
                        <img src={KidEvents} className="img-fluid" alt="testimonials"/>
                    </div>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                </div>
                <div className="item">
                    <div className="profile-pic">
                        <img src={KidEvents} className="img-fluid" alt="testimonials"/>
                    </div>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                </div>
         </OwlCarousel>
                </div>
            
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                <div className="image">
                    <img src={KidEvents} alt="Kid" className='img-fluid'/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Testimonails