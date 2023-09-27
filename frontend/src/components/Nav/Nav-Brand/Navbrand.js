import './NavBrand.css'
import { Link } from 'react-router-dom';
import React from 'react'
import { Text, LanguageContext } from '../../../languages/Language';


const NavBrand = () => {
    return ( 
        <div href="#home" className='navbrand__container'>
           <h1 className='navbrand'>
               <Link to="/"><h1 ><Text tid="exploreHeader" /></h1></Link>
            </h1>
        </div>
     );
}
 
export default NavBrand;