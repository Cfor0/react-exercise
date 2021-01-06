
import './App.css';
import React, { Component } from 'react';
import BasicInfo from './BasicInfo'

class App extends Component {

  // Easy Challenge
  constructor(props) {
    super(props)
    this.state = {
      person: {
        name: "Carlo",
        number: 7049571252,
        dob: '01-17-1997'
      }
    }
  }

  render() {
    return (
      <div className="App">
        {/* Very Easy Challenge
      <p>Name: Carlo Ortega</p>
      <p>Number: 7049571252</p>
      <p>DOB: 01/17/1997</p> */}

      <BasicInfo 
      name={this.state.person.name}
      number={this.state.person.number}
      dob={this.state.person.dob}/>

      </div>
    );
  }
}

export default App;
