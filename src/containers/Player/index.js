import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Timer from '../../components/Timer';
import { startTrack, pauseTrack, stopTrack } from '../../redux/modules';


class Player extends Component {
  static propTypes = {
    sourceRef: PropTypes.string,
    currentTime: PropTypes.number,
    elapsedTime: PropTypes.number,
    start: PropTypes.func,
  }

  static defaultProps = {
    sourceRef: null,
    currentTime: 0,
    elapsedTime: 0,
    start: () => {},
  };

  play = () => {
    const { start } = this.props;
    this.player.play();
    start(this.player.currentTime);
    console.log('hhhhh', this.props);
  }

  render() {
    console.log('asdsad', this.props);
    const { sourceRef, currentTime, elapsedTime } = this.props;
    return (
      <div>
        <audio controls ref={(el) => { this.player = el; }}>
          <track kind="captions" />
          <source src={sourceRef} type="audio/mp3" />
          <p>Your browser doesnt support HTML5 audio.
          </p>
        </audio>
        <button type="button" onClick={() => this.play()} />
        <div><Timer startTime={currentTime} /></div>
        <div>{elapsedTime}</div>
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
  const { playlists: { sourceRef }, audioPlayer: { currentTime, elapsedTime } } = state;
  return {
    sourceRef,
    currentTime,
    elapsedTime,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
