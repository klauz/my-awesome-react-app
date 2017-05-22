import React, { Component } from 'react';
import './App.css';
import Marquee from './Marquee.js'



class App extends Component {

  state = {
    bgColor: '',
    nrOfMarquees: []
  }

  componentDidMount() {
    setInterval(this.addMarquee, 1000);
  }

  addMarquee = () => {
    this.setState({nrOfMarquees: [...this.state.nrOfMarquees,
      <Marquee key={this.state.nrOfMarquees.length} speed={.2} bgChange={this.changeBgColor} />
    ]});
  }

  changeBgColor = (color) =>  {
    this.setState({bgColor: color})
  }

  render() {
    return (
      <div onClick={() => this.changeBgColor('yellow')} className="marqueeContainer" style={{ backgroundColor: this.state.bgColor }}>
        {this.state.nrOfMarquees}
      </div>
    );
  }
}

export default App;
