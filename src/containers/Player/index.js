import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Timer from '../../components/Timer';
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

  play = () => {
    const { start } = this.props;
    this.player.play();
    start(this.player.currentTime);
  }

  pause = () => {
    const { pause } = this.props;
    this.player.pause();
    pause(this.player.currentTime);
  }

  stop = () => {
    const { stop } = this.props;
    this.player.pause();
    this.player.currentTime = 0;
    stop();
  }


  render() {
    const {
      sourceRef, elapsedTime, isStarted, isPaused, isStopped,
    } = this.props;
    // const { isStarted } = this.state;
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
                <p>Your browser doesnt support HTML5 audio.
                </p>
              </audio>
              <div>
                <button type="button" onClick={() => this.play()}>
                  PLAY
                </button>
              </div>
              <div>
                <button type="button" onClick={() => this.pause()}>
                  PAUSE
                </button>
              </div>
              <div>
                <button type="button" onClick={() => this.stop()}>
                  STOP
                </button>
              </div>
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
