import React from 'react';
import './Header.css'
import logoHeader from './assets/gondo_1.svg';
 
function headerApp() {
   return(
       <div className="header">
           <h1 className="appName">GONDO</h1>
           <img className="headerLogo" src={logoHeader} alt="Gondo Logo"></img>
       </div>
   )
}
 
headerApp();
 
export default headerApp;