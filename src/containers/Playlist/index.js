import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectTrack, stopTrack } from '../../redux/modules';

// Display current playlist
class Playlist extends Component {
  static propTypes = {
    sourceRef: PropTypes.array,
    select: PropTypes.func,
    stop: PropTypes.func,
    stopPlayer: PropTypes.func,
  }

  static defaultProps = {
    sourceRef: null,
    select: () => {},
    stop: () => {},
    stopPlayer: () => {},
  };

  // change selected track to the one that has been clicked on the playlist
  selectTrack = (e, timestamp) => {
    const {
      sourceRef, select, stop, stopPlayer,
    } = this.props;
    stopPlayer();
    stop();
    select(sourceRef, timestamp);
  }


  render() {
    const { sourceRef } = this.props;
    return (
      <div className="playlist">
        <div className="playlist-title">Current Playlist</div>
        {sourceRef.map(item => (
          <button
            type="button"
            onClick={e => this.selectTrack(e, item.timestamp)}
            className="playlist-button"
            key={item.timestamp}
          >
                Click here to select {item.name}
          </button>
        ))}
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  select: bindActionCreators(selectTrack, dispatch),
  stop: bindActionCreators(stopTrack, dispatch),
});

const mapStateToProps = (state) => {
  const { playlists: { sourceRef } } = state;
  return { sourceRef };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
