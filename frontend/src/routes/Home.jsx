import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Landing from "../components/Landing/Landing";
import fetch from 'node-fetch'


import Design from "../components/Design/Design";
import Design2 from "../components/Design/Design2";
import Design3 from "../components/Design/Design3";

import FeaturedItems from "../components/Featured/Items/FetauredItems";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import { TabTitle } from "../utils/General";
import React from 'react'


const Home = () => {
    const [ featuredItems, setFeaturedItems ] = useState()
    TabTitle("Home - EthioWekil");

    
    useEffect(() => {
          const Data = async()=>{
             const res = await fetch('https://ethio-wekil-backend.vercel.app/items');
             const data = await res.json();
             return data ;     
          } 
         setFeaturedItems(Data);
         window.scrollTo(0, 0)
    }, [])

    return ( 
        <Fragment>
            <Landing />
            <Design3/>
            
            <Design/>
            <FeaturedItems items={featuredItems}/>
            <Design2/>
        </Fragment>
    );
}
 // <FeaturedCategories/>
export default Home;
