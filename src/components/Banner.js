import React from "react";
// import CardMedia from "@material-ui/core/CardMedia";

import CarouselDom from "./CarouselDom";
// import CarouselSlider from "./Carousel";

const imagesUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFCJpv4jozRj1EASRw1EzG0dQmhpXTj9usbA&usqp=CAU";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-container">
        {/* <CarouselSlider imagesUrl={imagesUrl} autoPlay={true} /> */}

        <CarouselDom imagesUrl={imagesUrl} />
        {/* <CardMedia>
          <img src="./banner.jpg" alt="bannerImage" />
        </CardMedia> */}
      </div>
    </div>
  );
}
