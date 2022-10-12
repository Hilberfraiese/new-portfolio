import React, { useContext } from "react";
import './Works.css';
import Nest from "../../img/nest.png"
import Node from "../../img/node.png"
import ReactImage from "../../img/react.png"
import Js from "../../img/js.png"
import Redux from "../../img/redux.png"
import { themeContext } from '../../Context'
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Works = ()=>{

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

    return (
      <div className="works">
        <div className="awesome">
          <span style={{color:darkMode? 'white' : ''}}>Languages</span>
          <span> ​​and Frameworks</span>
          <span>
          Scripting Language: Javascript, Typescript.
          <br />
          Front-End Skills: HTML, CSS, React, Redux, Styled Component, Sass.
          <br />
          Back-end Skills: Node.Js, NestJs.
          </span>
          <Link to="Contact" spy={true} smooth={true}>
            <button className="button s-button">Hire me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        <div className="w-right">
          <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
                <div className="w-secCircle">
                    <img src={Nest} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Node} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Js} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={ReactImage} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Redux} alt="" />
                </div>
            </motion.div>
              <div className="w-backCircle blueCircle"></div>
              <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    );
}

export default Works;