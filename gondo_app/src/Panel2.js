import React from 'react';
import ReactDOM from 'react-dom';
import './Panel2.css';

const Panel2 = () => {
  return (
    
    <div>
      <div className="panel-main">
        <div className="panel-header">
          I’ll be working for:
        </div>
        <div className="time-set-min" style={{display : 'inline-block'}}>
          20
        </div>
        <div className="time-set-colon" style={{display : 'inline-block'}}> 
          :
        </div>
        <div className="time-set-sec" style={{display : 'inline-block'}}>
          00
        </div>
        <div className="panel-RR-closed">
          <div className="panel-RR-header">
            Rest & repeat?
          </div>
          <label class="switch" style={{display : 'inline-block'}}>
            <input type="checkbox"/>
            <span class="slider round"></span>
          </label>          
        </div>

        <div className="letsGoButton">
          <div className="letsGoButton font">
            Let's go!
          </div>
        </div>
      </div>

      
      
    </div>
  )
}

export default Panel2; 