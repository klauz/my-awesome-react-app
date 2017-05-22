import React, { Component } from 'react';
export default class Marquee extends Component {

  state = {
    count: 1,
    txt: 'React, I love you',
    bgColor: 'red',
    visible: true,
    tick: 0,
    tock: false,
    angle: 0,
    increment: true
  }

  componentDidMount() {
    this.updateTxt()
    this.updateMotion()
    this.checkScroll()
  }

  checkScroll = () => {
    const { visible } = this.state
    const { top } = this.node.getBoundingClientRect();

    if(top < window.innerHeight/2 && !this.state.visible) {
      this.setState({visible:true})
    }

    if (!visible) {
      window.requestAnimationFrame(this.checkScroll);
    }
  }

  onClick = () => {
    this.setState({bgColor: this.state.bgColor === 'red' ? 'blue' : 'red'})
    this.props.bgChange('green');
  }

  updateTxt() {
    const { increment, count, tock } = this.state

    // if(tock) {
    //   this.setState({
    //     txt: 'React, I love you',
    //    })
    // } else {
    //   this.setState({
    //     txt: 'Yay',
    //   })
    // }



    if (count === 0) {
      this.setState({increment: true})
    } else if (count === 10) {
      this.setState({increment: false})
    }

    this.setState({
      count: count + (increment ? 1 : -1),

      txt: tock ? 'React, I love you' : 'Yay'
    })

    // if(increment && count < 10) {
    //   this.setState({count: count + 1})
    // } else if() {
    //
    // }

    setTimeout(() => this.updateTxt(), 100)
  }

  updateMotion = () =>  {
    const nextTick = this.state.tick + (Math.pow(this.props.speed, 3) * 3)
    const nextAngle = Math.cos(nextTick) * 40
    this.setState({
      tick: nextTick,
      angle: nextAngle,
      tock: this.state.angle < nextAngle
    })

    window.requestAnimationFrame(this.updateMotion)
  }

  render() {
    const { count, txt, angle, bgColor } = this.state
    let marks = ''
    for (var i = 0; i < count; i++) {
      marks += '!'
    }

    return (
      <div
        ref={ref => this.node = ref}
        onClick={this.onClick}
        style={{
          transform: `rotateZ(${angle}deg)`,
          borderRadius: angle*2+'px',
          backgroundColor: bgColor,
          color: txt === 'Yay' ? 'yellow' : 'white',
          opacity: this.state.visible ? 1 : 0
        }}
        className="Marquee">
        {txt}{marks}
      </div>
    );

  }
}
