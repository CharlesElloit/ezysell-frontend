import React, { useState, useEffect } from "react";
import { Card, makeStyles } from "@material-ui/core";
// import ArrowLeft from "@material-ui/icons/ArrowLeft";
// import ArrowRight from "@material-ui/icons/ArrowRight";
import Slide from "@material-ui/core/Slide";

function CarouselSlide(props) {
  const { backgroundColor, imagesUrl } = props.content;

  const useStyles = makeStyles(() => ({
    card: {
      width: "100%",
      minHeight: "120px",
      backgroundColor,
      borderRadius: 5,
      display: "flex",
      justifyContent: "center"
    },
    cardImg: {
      width: "100%",
      objectFit: "cover",
      height: 121
    }
  }));

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <img className={classes.cardImg} src={imagesUrl} alt="bannerimage" />
    </Card>
  );
}

function App() {
  const [index, setIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState("left");

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 39) {
        onArrowClick("right");
      }
      if (e.keyCode === 37) {
        onArrowClick("left");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const SLIDE_INFO = [
    {
      backgroundColor: "#ff7c7c",
      imagesUrl:
        "https://gw.alicdn.com/tfs/TB18PwQwFT7gK0jSZFpXXaTkpXa-2208-800.png_q50.jpg"
    },
    {
      backgroundColor: "#ffb6b9",
      title: "Slide 2",
      imagesUrl:
        "https://gw.alicdn.com/tfs/TB16XcvfCR26e4jSZFEXXbwuXXa-2208-800.png_q50.jpg"
    },
    {
      backgroundColor: "#8deaff",
      title: "Slide 3",
      imagesUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFCJpv4jozRj1EASRw1EzG0dQmhpXTj9usbA&usqp=CAU"
    },
    {
      backgroundColor: "#ffe084",
      imagesUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpFYKjZMmfmeo6x1LCtxWC-0ImZX7huDyKA&usqp=CAU"
    },
    {
      backgroundColor: "#d9d9d9",
      imagesUrl:
        "ttps://gw.alicdn.com/tfs/TB18PwQwFT7gK0jSZFpXXaTkpXa-2208-800.png"
    }
  ];

  const numSlides = SLIDE_INFO.length;
  const content = SLIDE_INFO[index];

  const onArrowClick = direction => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };

  // function Arrow(props) {
  //   const useStyles = makeStyles(() => ({
  //     button: {
  //       position: "relative"
  //     }
  //   }));

  //   const classes = useStyles();

  //   const { direction, clickFunction } = props;
  //   const icon = direction === "left" ? <ArrowLeft /> : <ArrowRight />;

  //   return (
  //     <div className={classes.button} onClick={clickFunction}>
  //       {icon}
  //     </div>
  //   );
  // }

  const useStyles = makeStyles(() => ({
    app: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    slide: {
      width: "100%",
      position: "relative"
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.app}>
      {/* <Arrow direction="left" clickFunction={() => onArrowClick("left")} /> */}
      <Slide className={classes.slide} in={slideIn} direction={slideDirection}>
        <div>
          <CarouselSlide content={content} />
        </div>
      </Slide>
      {/* <Arrow direction="right" clickFunction={() => onArrowClick("right")} /> */}
    </div>
  );
}

export default App;
