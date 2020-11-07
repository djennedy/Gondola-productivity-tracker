import logo from './logo.svg';
import React from 'react';
import './App.css';
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