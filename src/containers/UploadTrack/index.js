import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input } from '../../components/Input';

// THIS COMPONENT WILL NEED A REDUX ACTION
// TO ADD THE SOURCE INTO THE STORE FOR THE PLAYER

class UploadTrack extends Component {
  static propTypes = { }

  onUpload = (e) => {
    const audioFile = e.target.files[0];
    try {
      const source = URL.createObjectURL(audioFile);
      // redux action required here
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <Input type="file" onChange={this.onUpload} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(UploadTrack);
