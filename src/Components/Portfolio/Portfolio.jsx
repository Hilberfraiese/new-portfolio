import React, { useContext, useEffect, useState } from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Disney from "../../img/disneyclon.png";
import OTR from "../../img/OntheRocks.png";
import Recipes from "../../img/recipes.png";
import Madeira from "../../img/madeira.png";
import 'swiper/css'
import { themeContext } from '../../Context'
import {Link} from "react-router-dom"

const Portfolio = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
      }, []);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };  
  return (
    <div className="portfolio" id="Portfolio">
        <span style={{color:darkMode? 'white' : ''}}>Recent Project</span>
        <span>Portfolio</span>
        <Swiper
        spaceBetween={width>480?30:10}
        slidesPerView={width>480?3:1}
        grabCursor={true}
        className="portfolio-slider"
      >
            <SwiperSlide>
                <a href="https://disney-clon-42440.web.app/">
                    <img src={Disney} alt=""/>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://on-the-rocks-orcin.vercel.app/">
                    <img src={OTR} alt=""/>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://madeiraproject.vercel.app/">
                    <img src={Madeira} alt=""/>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://recipes-app-hf.web.app/">
                    <img src={Recipes} alt=""/>
                </a>
            </SwiperSlide>
        </Swiper>
    </div>  )
}

export default Portfolio