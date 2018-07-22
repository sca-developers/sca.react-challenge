import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from '../../components/Input';
import { addTrack, deleteTrack } from '../../redux/modules';

// Upload audio track. Can upload mulitple tracks to create a playlist.
class UploadTrack extends Component {
  static propTypes = {
    add: PropTypes.func,
    sourceRef: PropTypes.array,
  }

  static defaultProps = {
    add: () => {},
    sourceRef: [],
  }

  onUpload = (e) => {
    const { add } = this.props;
    const audioFile = e.target.files;
    if (audioFile && audioFile.length > 0) {
      const targetFile = audioFile[0];
      const { name } = audioFile[0];
      try {
        const source = URL.createObjectURL(targetFile);
        add(source, name);
      } catch (error) {
        console.error(error);
      }
    }
  }

  renderPlaylist = sourceRef => (
    <div className="upload-table">
      <div className="upload-title">Uploaded Tracks</div>
      <div>Feel free to add more to the playlist (Note: You cant add the same file if it was the previously selected file)</div>
      <ul className="upload-wrapper">
        {sourceRef.map((item, index) => <li className="upload-list" key={item.timestamp}> Track {index}: {item.name}</li>)}
      </ul>
    </div>
  )

  render() {
    const { sourceRef } = this.props;
    return (
      <div>
        <Input type="file" onChange={e => this.onUpload(e)} />
        {sourceRef.length > 0 ? this.renderPlaylist(sourceRef) : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: bindActionCreators(addTrack, dispatch),
  delete: bindActionCreators(deleteTrack, dispatch),
});

const mapStateToProps = (state) => {
  const { playlists: { sourceRef } } = state;
  return { sourceRef };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadTrack);
