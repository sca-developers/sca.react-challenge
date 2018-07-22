import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Timer from '../../components/Timer';
import Button from '../../components/Button';
import { startTrack, pauseTrack, stopTrack } from '../../redux/modules';


class Player extends Component {
  static propTypes = {
    sourceRef: PropTypes.string,
    isStarted: PropTypes.bool,
    isPaused: PropTypes.bool,
    isStopped: PropTypes.bool,
    elapsedTime: PropTypes.number,
    start: PropTypes.func,
    pause: PropTypes.func,
    stop: PropTypes.func,
  }

  static defaultProps = {
    sourceRef: null,
    isStarted: false,
    isPaused: false,
    isStopped: false,
    elapsedTime: 0,
    start: () => {},
    pause: () => {},
    stop: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      disablePlay: false,
      disablePause: true,
      disableStop: true,
    };
  }

  play = () => {
    const { start } = this.props;
    this.player.play();
    start(this.player.currentTime);
    this.setState({
      disablePlay: true,
      disablePause: false,
      disableStop: false,
    });
  }

  pause = () => {
    const { pause } = this.props;
    this.player.pause();
    pause(this.player.currentTime);
    this.setState({
      disablePlay: false,
      disablePause: true,
      disableStop: false,
    });
  }

  stop = () => {
    const { stop } = this.props;
    this.player.pause();
    this.player.currentTime = 0;
    stop();
    this.setState({
      disablePlay: false,
      disablePause: true,
      disableStop: true,
    });
  }


  render() {
    const {
      sourceRef, elapsedTime, isStarted, isPaused, isStopped,
    } = this.props;
    const { disablePlay, disablePause, disableStop } = this.state;
    return (
      <div>
        {!sourceRef
          ? (
            <div>You have not uploaded any files.
              <div>
                <Link to="/upload">Click here to upload</Link>
              </div>
            </div>
          )
          : (
            <div>
              <audio controls ref={(el) => { this.player = el; }}>
                <track kind="captions" />
                <source src={sourceRef} type="audio/mp3" />
                <p>Your browser doesnt support HTML5 audio.</p>
              </audio>
              <Button
                text="PLAY"
                disable={disablePlay}
                callback={disablePlay ? e => e.preventDefault() : () => this.play()}
              />
              <Button
                text="PAUSE"
                disable={disablePause}
                callback={disablePause ? e => e.preventDefault() : () => this.pause()}
              />
              <Button
                text="STOP"
                disable={disableStop}
                callback={disableStop ? e => e.preventDefault() :() => this.stop()}
              />
              <div>
                <Timer isStarted={isStarted} isPaused={isPaused} isStopped={isStopped} elapsedTime={elapsedTime} />
              </div>
            </div>
          )
        }
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  start: bindActionCreators(startTrack, dispatch),
  pause: bindActionCreators(pauseTrack, dispatch),
  stop: bindActionCreators(stopTrack, dispatch),
});

const mapStateToProps = (state) => {
  const {
    playlists: { sourceRef },
    audioPlayer: {
      elapsedTime, isStarted, isPaused, isStopped,
    },
  } = state;
  return {
    sourceRef,
    elapsedTime,
    isStarted,
    isPaused,
    isStopped,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
