import React from 'react';
import { Link } from 'react-router-dom';
import UploadFile from '../../containers/UploadTrack';

const Upload = () => (
  <div>
    <Link to="/">Home</Link>
    <h1>Upload</h1>
    <UploadFile />
  </div>
);

export default Upload;
