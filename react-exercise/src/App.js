
import './App.css';
import React, { Component } from 'react';
import BasicInfo from './BasicInfo'

class App extends Component {

  // Easy Challenge
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          name: "Carlo",
          number: 7049571252,
          dob: '01-27-1997'
        },
        {
          name: "Carlos",
          number: 7049271152,
          dob: '01-18-1992'
        },
        {
          name: "Carlito",
          number: 7949571252,
          dob: '01-17-1990'
        },
      ]
    }
  }

  render() {
    let persons = null;

    persons = (
      <div>
        {this.state.persons.map((ele, index) => {
          return <BasicInfo name={ele.name} number= {ele.number} dob={ele.dob} />
        })}
      </div>
    ) 
    return (
      <div className="App">
        {/* Very Easy Challenge
      <p>Name: Carlo Ortega</p>
      <p>Number: 7049571252</p>
      <p>DOB: 01/17/1997</p> */}

        {/* <BasicInfo
          name={this.state.person.name}
          number={this.state.person.number}
          dob={this.state.person.dob} /> */}

          {persons}
      </div>
    );
  }
}

export default App;
