import React, { Component } from 'react'
import Toy from './images/toy1.png'

export class ToyCategory extends Component {
  render() {
    return (
      <div className='toy-category'>
        <div className="container">
            <div className="row">
                <h2 className='text-center mb-5'>Toy's Category</h2>
                <div className="col-md-4">
                    <div className="image">
                        <img src={Toy} alt="Toy" className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="image">
                        <img src={Toy} alt="Toy" className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="image">
                        <img src={Toy} alt="Toy" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default ToyCategory