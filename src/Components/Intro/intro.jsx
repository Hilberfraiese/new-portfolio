import React, { useContext } from "react";
import './intro.css';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Perfil from "../../img/perfilsinfondo.png";
import {motion} from "framer-motion"
import GitHub from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import { themeContext } from '../../Context'
import { Link } from "react-scroll";


const Intro = () =>{
const theme = useContext(themeContext)
const darkMode = theme.state.darkMode;
    
const transition = { duration: 2, type: "spring" };

    return(
        <div className="intro"> 
          <div className="i-left">
             <div className="i-name">
                <span style={{color:darkMode? 'white' : ''}}>Hi! I am</span>  
                <span>Hilber Fraiese</span>
                <span >
                I am a Full Stack Mid-Level developer.<br/>
                I currently provide services to the Company Econocom, based in Mexico.<br/>
                In this company I develop front and backend, with recent technologies and <br/>
                ​​languages and looking for maximum scalability and standards when writing code.<br/>
                I also give DevOps team support.
                </span>
             </div>
             <Link to="Contact" spy={true} smooth={true}>
                <button className="button i-button">Hire Me</button>
             </Link>
             <div className="i-icons">
                 <a href="https://github.com/Hilberfraiese">
                 <GitHub color='#ff0080' size='6rem'/>
                 </a>
                 <a href="https://www.linkedin.com/in/hilber-fraiese/">
                 <Linkedin color='#ff0080' size='6rem'/>
                 </a>
             </div>
          </div>
          <div className="i-right">
                <img src = {Perfil} alt="" className="i-img"/>
               <motion.div
                initial={{ top: "-6%", left: "85%" }}
                whileInView={{ left: "73%" }}
                transition={transition}
                className="floating-div"
                >
                  <FloatingDiv txt1="Web" txt2='Developer'/>
               </motion.div>
               <div className="blur" style={{background:"rbg(2368 210 255)"}}>    </div>
               </div>
        </div>
    )
}

export default Intro;