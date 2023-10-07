import './Landing.css'

import { Link } from "react-router-dom"
import { Button } from "@mui/material";
import React from 'react'
import land_en from "../../asset/brand/logo2.png"
import land_am from '../../asset/brand/logo_am.png';
import { Text, LanguageContext } from '../../languages/Language';
import { useContext } from 'react';
import furniture from "../../asset/brand/furniture.jpg"
import tv from "../../asset/brand/tv.jpg"
import const2 from "../../asset/brand/const.jpg"



const Landing = () => {
    const languageContext = useContext(LanguageContext);

    return (
     
        <div className="overlap-2">
        <div className="overlap-3">
          <div className="section-content">
            <img className="rectangle-4" alt="Rectangle" src={const2} />
            <img className="rectangle-5" alt="Rectangle" src={furniture} />
            <img className="rectangle-6" alt="Rectangle" src={tv} />
            <div className="checkout-the-best">
              {languageContext.dictionary["landing_header_2"]}
              <br />
              {languageContext.dictionary["landing_header_3"]}
            </div>
            <p className="p">{languageContext.dictionary["landing_header_1"]}</p>
          </div>
          <img className="logo" alt="Logo" src={land_en}/>
          <button className="button">
            <div className="text-wrapper-9">{languageContext.dictionary["shop now"]}</div>
          </button>
        </div>
        <button className="div-wrapper">
          <div className="text-wrapper-9">{languageContext.dictionary["shop now"]}</div>
        </button>
        <button className="button-2">
          <div className="text-wrapper-9">{languageContext.dictionary["shop now"]}</div>
        </button>
      </div>
     );
}
 
export default Landing;
