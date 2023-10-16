import React from "react";
import CustomCart from "./CustomCart";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Home() {
  return (
    <div className="parent">
      <h1>Products</h1>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        <CustomCart />
        <CustomCart />
        <CustomCart />
        <CustomCart />
        <CustomCart />
        <CustomCart />
      </Carousel>
    </div>
  );
}
