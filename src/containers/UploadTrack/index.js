import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input } from '../../components/Input';
import { addTrack, deleteTrack } from '../../redux/modules';

// THIS COMPONENT WILL NEED A REDUX ACTION
// TO ADD THE SOURCE INTO THE STORE FOR THE PLAYER

class UploadTrack extends Component {
  static propTypes = {
    add: PropTypes.func,
  }

  onUpload = (e) => {
    const { add } = this.props;
    const audioFile = e.target.files;
    if (audioFile && audioFile.length > 0) {
      const targetFile = audioFile[0];
      try {
        const source = URL.createObjectURL(targetFile);
        add(source);
      } catch (error) {
        console.error(error);
      }
    }
  }

  render() {
    console.log('props', this.props);
    return (
      <Input type="file" onChange={e => this.onUpload(e)} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: bindActionCreators(addTrack, dispatch),
  delete: bindActionCreators(deleteTrack, dispatch),
});

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadTrack);
