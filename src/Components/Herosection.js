import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'


export class Herosection extends Component {
  render() {
    return (
      
        <div className="herosection">
          <div className="container">
          <OwlCarousel
         className='owl-theme'
         items="1"
         autoplay
         dots
         loop
         >
          <div className="item">
            <h1>Slider</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
          </div>
          <div className="item">
            <h1>Slider</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
          </div>
          <div className="item">
            <h1>Slider</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
          </div>
         </OwlCarousel>
          </div>
       
        </div>
      
    )
  }
}

export default Herosection