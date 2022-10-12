
import back from './back.png'
import front from './front.png'
import web from './aws.png'
import Resume from '../../img/Hilber_Fraiese-Full_Stack_Developer.pdf'
import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Skills</span>
        <span>
        AWS  S3 | EC2 | Lambda | Elastic Beanstalk 
        <br />
        Azure AKS | Blob Storage
        <br />
        Github | BitBucket
        </span>
        <a href={Resume} download className='a-button'>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "30rem" }}
          whileInView={{ left: "24rem" }}
          transition={transition}
        >
          <Card 
            img = {front}
            heading = {'Database'}
            detail = {'Mongo, MySQL, PostgreSQL'}
            urlImage={'aws.pgn, '}
            />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "5rem", top: "2rem" }}
          whileInView={{ left: "6rem" }}
          transition={transition}
        >
          <Card 
            img = {back}
            heading = {'Soft Skills'}
            detail = {'Teamwork, Conflict resolution, Adaptation to change'}
            urlImage={'aws.pgn, '}
            />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "35rem" }}
          whileInView={{ left: "22rem" }}
          transition={transition}
        >
          <Card 
            img = {web}
            heading = {'Cloud'}
            detail = {'AWS, AZURE, GCP'}
            urlImage={'aws.pgn, '}
            />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;