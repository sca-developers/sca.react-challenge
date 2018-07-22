import React from 'react';
import PropTypes from 'prop-types';
import formatTime from '../utils/formatTime';

// Re-useable timer component. Can start incrementing from a given time reference.
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
    } else if (isPaused) {
      this.paused(nextProps);
    } else if (isStopped) {
      this.stop();
    }
  }

  // Only re-renders when timer starts and during uninterrupted play
  shouldComponentUpdate(nextProps, nextState) {
    const { isStarted, isPaused, seconds } = this.state;
    const isStartedChanged = nextState.isStarted !== isStarted;
    const timeChanged = nextState.seconds !== seconds;
    if ((isStartedChanged) && !isPaused) return true;
    if (timeChanged) return true;
    return false;
  }

  // Reset timer when component unmounts
  componentWillUnmount() {
    this.stop();
  }

  // Set seconds on timer
  startTimer = () => {
    this.timer = setInterval(() => {
      const { seconds } = this.state;
      this.setState({
        seconds: seconds + 1,
      });
    }, 1000);
  };

  // Start timer
  start = (nextProps) => {
    const { isStarted } = nextProps;
    this.setState({ isStarted });
    this.startTimer();
  }

  // Pause timer and reset interval. Timer gets new time reference from player after play resume.
  paused = (nextProps) => {
    const { isPaused, elapsedTime } = nextProps;
    this.setState({
      isPaused,
      seconds: elapsedTime,
    });
    clearInterval(this.timer);
  }

  // Stop timer
  stop = () => {
    this.setState({
      isStarted: false,
      isPaused: false,
      seconds: 0,
    });
    clearInterval(this.timer);
  }

  render() {
    const { seconds } = this.state;
    return (
      <div>
        <div className="player-timer">{formatTime(seconds)}</div>
      </div>
    );
  }
}

export default Timer;
