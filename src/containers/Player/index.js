import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { playTrack, pauseTrack, stopTrack } from '../../redux/modules';


class Player extends Component {
  static propTypes = { }

  onUpload = () => {
  }

  render(props) {
    return (
      <audio controls>
        <track kind="captions" {...props} />
        <source src="myAudio.mp3" type="audio/mp3" />
        <source src="myAudio.ogg" type="audio/ogg" />
        <p>Your browser doesnt support HTML5 audio.
        </p>
      </audio>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  play: bindActionCreators(playTrack, dispatch),
  pause: bindActionCreators(pauseTrack, dispatch),
  stop: bindActionCreators(stopTrack, dispatch),
});

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
