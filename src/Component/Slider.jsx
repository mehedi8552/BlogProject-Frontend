import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import ProductStore from "../Store/ProductStore";
import {useEffect } from "react";
const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

const Slider = () => {
  const {SliderList,SliderListRequest}= ProductStore();
  useEffect(() => {
    (async () => {
      await SliderListRequest();
    })();
  }, []);
  return (
    
    <Link className="slide-container mx-2 no-underline">
      <Slide>
      {
        SliderList?.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.image})` }}
            >
                <span class="font-semibold text-white">{slideImage.title}</span>
            </div>
          </div>
        ))
        
        }
      </Slide>
    </Link>
  );
};

export default Slider;
