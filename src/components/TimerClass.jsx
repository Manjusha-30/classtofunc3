import React, { Component } from 'react';

class TimerClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
    this.interval = null;
  }

  componentDidMount() {
    // Start the timer on mount
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear interval on unmount
    clearInterval(this.interval);
    console.log('Timer unmounted and interval cleared');
  }

  render() {
    return (
      <div>
        <h2>Timer (Class)</h2>
        <p>Seconds: {this.state.seconds}</p>
      </div>
    );
  }
}

export default TimerClass;
