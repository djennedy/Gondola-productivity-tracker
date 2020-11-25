import './Panel1.css';
import React from 'react';
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
        <div style = {{display: 'table-cell', paddingLeft: '25px',paddingRight: '25px', maxWidth: '600px', minWidth: '600px'}}>
        <h2 style = {{textAlign: 'center', fontSize: '1.5em'}} >{this.state.activity[this.state.count]}</h2>
        </div>

        <img src={btnRight} alt = 'left' style = {{display: 'table-cell' }} onClick={() => 
          (this.state.count == this.state.activity.length -1) ? 
          this.setState({ count: 0 }) : this.setState({ count: this.state.count + 1 })
          
          }/>
      </div>  
    );
  }
}
export default Active_Header;