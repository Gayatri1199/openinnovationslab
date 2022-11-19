import React, { Component } from 'react'
import KidEvents from './images/kids-events.jpg'

export class KidsEvents extends Component {
  render() {
    return (
        <div className="kids-events mt-5">
        <div className="container">
            <div className="row">
                <div className="col-xxl-6 col-lg-6 col-12">
                    <div className="image">
                        <img src={KidEvents} alt="Events" className='img-fluid'/>
                    </div>
                </div>
                <div className="col-xxl-6 col-lg-6 col-12">
                    <div className="matter">
                        <h2>We help organise events for <br /> kids</h2>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <button>Discover now</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
  }
}

export default KidsEvents