import React from 'react'
import humble from '../images/humble.png'
import surrender from '../images/surrender.jpg'


function MiracleWall() {

  return (
    <div className='container w-75 mt-5'>
<div id="carouselExampleDark" className="carousel carousel-light slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={humble} className="d-block w-100" alt="..."/>
      <div className="carousel-caption  d-md-block">
        <br />
        <p>If the doctor says no</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={surrender} className="d-block w-100" alt="..." />
      <div className="carousel-caption  d-md-block">
        <br />
        <p>For everyone strugling</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={humble} className="d-block w-100" alt="..." />
      <div className="carousel-caption  d-md-block">
        <br />
        <p>when it seems impossible</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default MiracleWall
