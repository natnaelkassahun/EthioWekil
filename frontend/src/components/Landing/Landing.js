import './Landing.css'

import { Link } from "react-router-dom"
import { Button } from "@mui/material";
import React from 'react'
import land_en from '../../asset/brand/logo_en.png';
import land_am from '../../asset/brand/logo_am.png';
import { Text, LanguageContext } from '../../languages/Language';
import { useContext } from 'react';



const Landing = () => {
    const languageContext = useContext(LanguageContext);

    return (
         
        <div className="landing__container">
            <div className="landing__header__container">
                <div className="landing__header">
                    <h3 className="landing__header__discount">{languageContext.dictionary["landing_header_1"]}</h3>
                    <h2 className="landing__header__main">{languageContext.dictionary["landing_header_2"]}</h2>
                    <h2 className="landing__header__main">{languageContext.dictionary["landing_header_3"]}</h2>
                    <Link to="/shop">
                        <Button variant='outlined' sx={[ {width: '190px', height: '50px', borderRadius: '20px' , fontWeight: '700', backgroundColor: 'none', borderColor: 'black', color: 'black' }, {'&:hover': {  backgroundColor: "black" , color: "#FFE26E", borderColor: 'black'}}]}>{languageContext.dictionary["shop now"]}</Button>
                    </Link>
                </div>
            </div>
            <div className="landing__image__container">
                {languageContext.dictionary["landingImg"] == "en_IMG" ? <img className="landing__image;float: right;" src={land_en} alt=""/>: <img className="landing__image;float: right;" src={land_am} alt=""/>}
                
            </div>
        </div>
     );
}
 
export default Landing;