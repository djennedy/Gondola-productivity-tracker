
import React from 'react';
import './Panel1.css';
import cargo from './Cargo.png';

class Settings_btn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  
  render(){
    return (  
    <img src={cargo} className="Settings_btn" onClick={() =>  alert('Settings')  }/>
    );
  }
}
export default Settings_btn;