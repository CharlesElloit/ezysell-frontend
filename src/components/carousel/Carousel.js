import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./Carousel.css";

export default class CarouselSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Carousel
        showThumbs={false}
        autoPlay={this.props.autoPlay}
        showArrows="false"
      >
        <div className="carousel-image-container">
          <img
            className="carousel-imgae"
            src={this.props.imageUrl}
            alt="carouselImage"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR9cT23QMhabH_ewiLLfcNbj6SY9QKSpkUhw&usqp=CAU"
            alt="carouselImage"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR9cT23QMhabH_ewiLLfcNbj6SY9QKSpkUhw&usqp=CAU"
            alt="carouselImage"
          />
        </div>
      </Carousel>
    );
  }
}
