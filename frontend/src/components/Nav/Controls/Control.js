import './Control.css'

import { useContext } from 'react';
import { WishItemsContext } from '../../../Context/WishItemsContext';
import React, {useState } from 'react';
import { Text, LanguageContext } from '../../../languages/Language';
import { languageOptions } from '../../../languages';


const Control = () => {
    const { userLanguage, userLanguageChange } = useContext(LanguageContext);

    // set selected language by calling context method
    const handleLanguageChange = e => userLanguageChange(e.target.value);
    const languageOptions = {
        am: 'አማርኛ',
        en: 'English',
      };


    return ( 
        <div className="control__bar__container">
            <div className="controls__container">
            <div  className="control">
            <select className="control"
                  onChange={handleLanguageChange}
                  value={userLanguage}
            >
             
             {Object.entries(languageOptions).map(([id, name]) => (
                  <option key={id} value={id}>{name}</option>
              ))}
            
            </select>

            </div>
                
        </div>
        </div>
     );
}
 
export default Control;