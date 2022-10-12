import React, { useContext } from "react";
import './Card.css'
import { themeContext } from "../../Context";


const Card = ({img,heading, detail,urlImage}) => {
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
console.log(darkMode)
let details = detail.split(",")
let urlImages = urlImage.split(",")
let imga = "./"+urlImages[0]
console.log(imga)
console.log("urlImages", urlImages)
   return(
    <div className="card">
      <span>{heading}</span>
      <hr
        style={{
            color: darkMode? 'white' : '',
            backgroundColor: darkMode? 'white' : '',
            height: "1px",
            width: "80%",
            marginBottom: "15%"
        }}
       />       
       { details.map(e=>{
         return(
            <span style={{color:darkMode? 'white' : ''}}>{e}</span>
         )
      })}
    </div>
   )
}

export default Card;