import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: props.startTime,
    };
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  startTimer = () => {
    this.timer = setTimeout(() => {
      if (!this.stopped) this.startTimer();
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  };

  start() {
    this.stopped = false;
    this.startTimer();
  }

  stop = () => {
    this.stopped = true;
    clearTimeout(this.timer);
  };

  resume = () => {
    if (this.stopped) {
      this.start();
    }
  };

  formatTime = (seconds) => {
    const date = new Date(null);
    date.setSeconds(seconds); // specify value for SECONDS here
    return date.toISOString().substr(11, 8);
  }

  render() {
    return (
      <div>
        <div>{this.formatTime(this.state.seconds)}</div>
      </div>
    );
  }
}

export default Timer;
