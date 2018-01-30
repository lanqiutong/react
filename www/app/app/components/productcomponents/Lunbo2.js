import React, { Component } from 'react';
import { NavLink } from 'dva/router';
export default class Lunbo extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            speed: 1000,
            autoplay: 5000,
            autoplayDisableOnInteraction: false,
            grabCursor: true,

            pagination: '.swiper-pagination',


            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',


        })
    }
    render() {
        return (

            <NavLink to="/Productpicker"><div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><img src="./images/slideshow/lunbo_2/1452811719003755916.jpg" /></div>
                    <div className="swiper-slide"><img src="./images/slideshow/lunbo_2/1452812035769582177.jpg" /></div>
                    <div className="swiper-slide"><img src="./images/slideshow/lunbo_2/1464460110373291823.jpg" /></div>
                    <div className="swiper-slide"><img src="./images/slideshow/lunbo_2/1464461155351459885.jpg" /></div>
                    <div className="swiper-slide"><img src="./images/slideshow/lunbo_2/1464471045264783761.jpg" /></div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
            </NavLink>
        )
    }
}
