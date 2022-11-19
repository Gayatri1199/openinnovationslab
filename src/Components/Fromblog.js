import React, { Component } from 'react'
import Blog from './images/blog-1.jpg'

export class Fromblog extends Component {
  render() {
    return (
      <div className="fromblog mt-5">
        <div className="container">
            <h2 className='text-center'>From the Blog</h2>
            <p className='text-center'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            <div className="row">
                <div className="col-xxl-4 col-lg-4 col-md-12">
                    <div className="image">
                        <img src={Blog} alt="Blog" className='img-fluid' />
                    </div>
                </div>
                <div className="col-xxl-4 col-lg-4 col-md-12">
                    <div className="image">
                        <img src={Blog} alt="Blog" className='img-fluid' />
                    </div>
                </div>
                <div className="col-xxl-4 col-lg-4 col-md-12">
                    <div className="image">
                        <img src={Blog} alt="Blog" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Fromblog