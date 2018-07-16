import React from 'react';

const Home = () => (
  <React.Fragment>
    <h1>SCA Redux Code Challenge</h1>
    <h2>Hey potential SCA Developer!</h2>
    <p>Thank you for taking this challenge to join our development team.</p>
    <h2>Instructions for Candidate</h2>
    <p>
      This guide contains the goal of the challange, requirements &amp; some useful notes to assist you.
    </p>
    <p>
      You will need to implement these requirements using react, react-router &amp; redux and create a pull request back to the git hub repository. You can use any UI or other libraries as you see fit for this challange.
    </p>
    <p>
      This challange should take no longer than 4 hours to complete &amp; is here to assess candidates ability to:
    </p>
    <ul>
      <li>Implement the essential requirements</li>
      <li>Use react, react-router &amp; redux for page, components &amp; state store</li>
      <li>Write good quality code</li>
      <li>Have funcional code</li>
      <li>Create pull request for the changes</li>
    </ul>

    <h2>Goal</h2>
    <p>
    This is a challenge to add a new page with the components which are controlled with a redux store to show a working application. The essential requirements have come from a product owner but you can be creative with the implementation of the player with the UI, UX and the code to implement.
    </p>

    <h2>Requirements</h2>
    <ul>
      <li>Player page has ability to upload an mp3 audio file (This is to be stored into redux &amp; not physical disk)</li>
      <li>Player page to display the audio player</li>
      <li>Audio Player has the ability to Play &amp; Pause</li>
      <li>Audio Player displays the audio length</li>
      <li>Audio Player displays the current audio play time</li>
    </ul>

    <h2>Steps</h2>
    <ol>
      <li>Create a new page for the file upload and audio player with a URL of /player.</li>
      <li>Implement and finish the UploadTrack component found here: ./src/containers/UploadTrack</li>
      <li>Create the new audio player component, controlled by redux (To be created and implemented)</li>
      <li>Create Navigation Component and Add to the Home &amp; Player pages</li>
    </ol>
  </React.Fragment>
);

export default Home;
