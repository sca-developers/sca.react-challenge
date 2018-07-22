import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Timer from '../../components/Timer';
import Button from '../../components/Button';
import { startTrack, pauseTrack, stopTrack } from '../../redux/modules';
import Playlist from '../Playlist';
import formatTime from '../../components/utils/formatTime.js';

// Display the audio player
class Player extends Component {
  static propTypes = {
    selectedRef: PropTypes.object,
    isStarted: PropTypes.bool,
    isPaused: PropTypes.bool,
    isStopped: PropTypes.bool,
    elapsedTime: PropTypes.number,
    duration: PropTypes.number,
    start: PropTypes.func,
    pause: PropTypes.func,
    stop: PropTypes.func,
  }

  static defaultProps = {
    selectedRef: null,
    isStarted: false,
    isPaused: false,
    isStopped: false,
    elapsedTime: 0,
    duration: 0,
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
    start({
      elapsedTime: this.player.currentTime,
      duration: this.player.duration,
    });
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
      selectedRef, elapsedTime, duration, isStarted, isPaused, isStopped,
    } = this.props;
    const { disablePlay, disablePause, disableStop } = this.state;
    return (
      <div>
        {!selectedRef
          ? (
            <div>You have not uploaded any files.
              <div>
                <Link to="/upload">Click here to upload</Link>
              </div>
            </div>
          )
          : (
            <div>
              <Playlist stopPlayer={() => this.stop()} />
              <div>
                <div className="player-selected-title">
                  Current selected track
                </div>
                <div className="player-selected-track">
                  {selectedRef.name}
                </div>
              </div>
              <div className="player-controls-title">
                Controls
                <audio onEnded={() => this.stop()} ref={(el) => { this.player = el; }}>
                  <track kind="captions" />
                  <source src={selectedRef.source} type="audio/mp3" />
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
              </div>
              <div>
                <div className="player-timer-title">
                Timer
                </div>
                <Timer
                  isStarted={isStarted}
                  isPaused={isPaused}
                  isStopped={isStopped}
                  elapsedTime={elapsedTime}
                />
              </div>
              <div>
                <div className="player-duration-title">
                Duration
                </div>
                <div className="player-duration">{formatTime(duration)}</div>
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
    playlists: { selectedRef },
    audioPlayer: {
      elapsedTime, duration, isStarted, isPaused, isStopped,
    },
  } = state;
  return {
    selectedRef,
    elapsedTime,
    duration,
    isStarted,
    isPaused,
    isStopped,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
