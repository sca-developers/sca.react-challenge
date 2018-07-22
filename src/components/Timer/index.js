import React from 'react';
import PropTypes from 'prop-types';

class Timer extends React.Component {
  static propTypes = {
    isStarted: PropTypes.bool,
    isPaused: PropTypes.bool,
    isStopped: PropTypes.bool,
    elapsedTime: PropTypes.number,
  }

  static defaultProps = {
    isStarted: false,
    isPaused: false,
    isStopped: false,
    elapsedTime: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      isPaused: false,
      seconds: props.elapsedTime || 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isStarted, isPaused, isStopped } = nextProps;

    if (isStarted && !isPaused) {
      this.start(nextProps);
    }
    if (isPaused) {
      this.paused(nextProps);
    }

    if (isStopped) {
      this.stop(nextProps);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isStarted, isPaused, seconds } = this.state;
    const isStartedChanged = nextState.isStarted !== isStarted;
    if ((isStartedChanged) && !isPaused) return true;
    if (nextState.seconds !== seconds) return true;

    return false;
  }

  componentWillUnmount() {
    this.stop();
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      const { seconds } = this.state;
      this.setState({
        seconds: seconds + 1,
      });
    }, 1000);
  };

  // resumeTimer = (elapsedTime) => {
  //   console.log('elapsedTime', elapsedTime);
  //   console.log('math', Math.floor(elapsedTime));
  //   const millisTillNextSecond = (1 - (elapsedTime - Math.floor(elapsedTime)))*1000;
  //   console.log('millisTillNextSecond', millisTillNextSecond);
  //   this.timer = setTimeout(() => {
  //     this.startTimer();
  //   }, millisTillNextSecond);
  // };

  start = (nextProps) => {
    const { isStarted } = nextProps;
    this.setState({ isStarted });
    this.startTimer();
  }

  paused = (nextProps) => {
    const { isPaused, elapsedTime } = nextProps;
    this.setState({
      isPaused,
      seconds: elapsedTime,
    });
    clearInterval(this.timer);
  }

  stop = (nextProps) => {
    const { isStarted, isPaused } = nextProps;
    this.setState({
      isPaused,
      isStarted,
      seconds: 0,
    });
    clearInterval(this.timer);
  }

  formatTime = (seconds) => {
    const date = new Date(null);
    date.setSeconds(seconds); // specify value for SECONDS here
    return date.toISOString().substr(11, 8);
  }

  render() {
    const { seconds } = this.state;
    return (
      <div>
        <div>{this.formatTime(seconds)}</div>
      </div>
    );
  }
}

export default Timer;
