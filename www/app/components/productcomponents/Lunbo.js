import React, { Component } from 'react';
import { NavLink } from 'dva/router';
export default class Lunbo extends Component {
  constructor(){
    super();
  }
  componentDidMount(){
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      speed:1000,
      autoplay:5000,
      autoplayDisableOnInteraction:false,
      grabCursor:true,
     
      pagination: '.swiper-pagination',

     
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',

      
    })        
  }
  render() {
    return (
      
      <NavLink to="/Productpicker"><div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide"><img src="./images/slideshow/lunbo_1/1463850976396524642.jpg"/></div>
          <div className="swiper-slide"><img src="./images/slideshow/lunbo_1/1463851010373230727.jpg"/></div>
          <div className="swiper-slide"><img src="./images/slideshow/lunbo_1/1463851058221832086.jpg"/></div>
          <div className="swiper-slide"><img src="./images/slideshow/lunbo_1/1463851086458886302.jpg" /></div>
          <div className="swiper-slide"><img src="./images/slideshow/lunbo_1/1464112447093625415.jpg" /></div>
          <div className="swiper-slide"><img src="./images/slideshow/lunbo_1/1464115904134992478.jpg" /></div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
      </NavLink>
    )
  }
}
