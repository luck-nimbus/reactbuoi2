import React, { Component } from 'react'
import slide_1 from "../../Assets/img/slide_1.jpg";
import slide_2 from "../../Assets/img/slide_2.jpg";
import slide_3 from "../../Assets/img/slide_3.jpg";

export default class Carousel extends Component {
    render() {
        return (
            <div>
                <div id="carouselId" className="carousel slide" data-ride="carousel">

                    <ul className="carousel-indicators">
                        <li data-target="#carouselId" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselId" data-slide-to="1"></li>
                        <li data-target="#carouselId" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner carousel--custom ">
                        <div className="carousel-item active">
                            <img src={ slide_1 } alt="Los Angeles" style={{}} />
                        </div>
                        <div className="carousel-item">
                            <img src={slide_2} alt="Chicago" />
                        </div>
                        <div className="carousel-item">
                            <img src={slide_3} alt="New York" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselId" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#carouselId" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>

                </div>
            </div>
        )
    }
}
