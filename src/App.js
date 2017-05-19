import React, { Component } from 'react';
import './App.css';

var directionForward = true;

class App extends Component {

  state = {
    count: 1,
    txt: 'React, I love you',
    degree: -6
  }

  componentDidMount() {
    this.updateTxt()
    this.updateMotion()
  }

  updateTxt() {

    if(this.state.count === 10 && directionForward === true) {
      directionForward = false;
    } else if(this.state.count === 1 && directionForward === false) {
      directionForward = true;
    }

    if(directionForward === true) {
      this.setState({
        count: this.state.count + 1,
        txt: 'React, I love you',
       })
    } else {
      this.setState({
        count: this.state.count - 1,
        txt: 'Yay',
      })

    }
    setTimeout(() => this.updateTxt(), 100)
  }

  updateMotion() {

    if(directionForward === true) {
      this.setState({
        degree: this.state.degree + .2
       })
    } else {
      this.setState({
        degree: this.state.degree -.2
      })

    }

    setTimeout(() => this.updateMotion(), 5)
  }

  render() {
    const { count, txt, degree } = this.state
    let marks = ''
    for (var i = 0; i < count; i++) {
      marks += '!'
    }

    return (
      <div style={{ transform: `rotateZ(${degree}deg)`, borderRadius: degree*2+'px', color: txt === 'Yay' ? 'yellow' : 'white' }} className="App">
        {txt}{marks}
      </div>
    );
  }
}

export default App;
