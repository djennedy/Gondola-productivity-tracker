import logo from './logo.svg';
import React from 'react';
import './App.css';
import btnLeft from './BtnLeft.png';
import btnRight from './BtnRight.png';

class Active_Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      activity : ['Homework', 'Exercising', 'Sleep', 'Reading', 'Chores']
    };
  }

  
  render(){
    return (
      
      <div className="Active_header">
        <img src={btnLeft} style = {{display: 'table-cell' }} onClick={() => 
          (this.state.count == 0) ? 
          this.setState({ count: this.state.activity.length -1 }) : this.setState({ count: this.state.count - 1 })
        }/>
        <h1 style = {{display: 'table-cell' }}>{this.state.activity[this.state.count]}</h1>


        <img src={btnRight} alt = 'left' style = {{display: 'table-cell' }} onClick={() => 
          (this.state.count == this.state.activity.length -1) ? 
          this.setState({ count: 0 }) : this.setState({ count: this.state.count + 1 })
          
          }/>
      </div>  
    );
  }
}
export default Active_Header;