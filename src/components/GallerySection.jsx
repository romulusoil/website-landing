import React from 'react'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { bowsertruck,bowsertruck2,datm,datum2,datum3 } from '../assets'
import { useState } from 'react'
import {gallery} from "../constants"



const images = [bowsertruck, datm, datum2, bowsertruck2, datum3];


function Gallery() {

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
      infinite: true,
      lazyLoad: true,
      speed: 300,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: 0,
      responsive: [
        {
          breakpoint: 768, // Set the breakpoint at which the image should be bigger
          settings: {
            slidesToShow: 1, // Show only 1 slide
            centerMode: true,
            centerPadding: "40px", // Add padding to make the image bigger
            initialSlide: 1,
          },
        },
      ],
      nextArrow: (
        <ArrowForwardIosIcon
          sx={{
            color: "black",
            mr: ["25px", "13px"],
            "&:hover": { color: "chocolate" },
          }}
        />
      ),
      prevArrow: (
        <ArrowBackIosNewIcon
          sx={{
            color: "black",
            ml: ["25px", "13px"],
            "&:hover": { color: "chocolate" },
          }}
        />
      ),
      beforeChange: (current, next) => setImageIndex(next),
    };

  return (
    <>
      <motion.div variants={textVariant()}>
        <div className={`${styles.sectionHeadText} text-center`}>Gallery</div>
      </motion.div>
      <p className={`${styles.sectionSubText}text-secondary text-center`}>
        A Glimpse of Our Accomplishments : Our Gallery of Cutting-Edge Solutions
      </p>

      <div className="App">
        <Slider {...settings}>
          {gallery.map((obj,idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={obj.img} alt={obj.img} />
              <p className="text-black text-justify">
                {/* {obj.description} */}
              </p>
            </div>
          ))}
        </Slider>
      </div>
      {/* <p className="text-black text-justify">
        Take a closer look at our extensive collection of pioneering solutions
        and remarkable accomplishments in our gallery of cutting-edge
        innovations. With impressive products and services, we showcase our
        unwavering commitment to developing innovative solutions that address
        the diverse needs of our customers.
      </p> */}
    </>
  );
}

export default SectionWrapper(Gallery,"gallery")