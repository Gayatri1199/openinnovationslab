import React, { Component } from 'react'
import Kidsplaying from './images/kids-playing.jpg'
import Kid4 from './images/kid4.jpg'

export class Youwilllove extends Component {
  render() {
    return (
      <div className='you-will-love mt-5'>
        <div className="container">
          <h2 className='text-center mb-5'>You'll <i class="fa-solid fa-heart"></i> this</h2>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12">
                <div className="large-image">
                    <img src={Kidsplaying} alt="Kids" className='img-fluid' />
                </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12">
                <div className="row">
                    <div className="col-md-6">
                    <div className="small-image">
                            <img src={Kid4} alt="Kid" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="small-image">
                            <img src={Kid4} alt="Kid" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="small-image">
                            <img src={Kid4} alt="Kid" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="small-image">
                            <img src={Kid4} alt="Kid" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Youwilllove