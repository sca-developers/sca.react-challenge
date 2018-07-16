# SCA React Challenge

Hey potential SCA Developer! Thank you for taking this challenge to join our development team.

## Instructions for Candidate

This readme contains the goal of the challange, requirements & some useful notes to assist you.

You will need to implement these requirements using react, react-router & redux and create a pull request back to the git hub repository. You can use any UI or other libraries as you see fit for this challange.

This challange should take no longer than 4 hours to complete & is here to assess candidates ability to:

- Implement the essential requirements
- Use react, react-router & redux for page, components & state store
- Write good quality code
- Have funcional code
- Create pull request for the changes

## Goal

This is a challenge to add a page, components which are controlled with a redux store for this sample application. The essential requirements have come from a product owner but you can be creative with the implementation of the player with the UI, UX and the code to implement.

### Steps

1. Create a new page for the file upload and audio player with a URL of `/player`.
2. Implement and finish the UploadTrack component found here: `./src/containers/UploadTrack`
3. Create the new audio player component, controlled by redux (To be created and implemented)
4. Create Navigation Component and Add to the Home & Player pages

## Requirements

- Player page has ability to upload an mp3 audio file (This is to be stored into redux & not physical disk)
- Player page to display the audio player
- Audio Player has the ability to Play & Pause
- Audio Player displays the audio length
- Audio Player displays the current audio play time

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)

To get started with this application:

- From the repo root folder run

```js

  npm install
  npm start

```

## Note to Developer

This project is based on Create React App with Redux installed.

- In this repo src you will find the basic code for a redux store and mp3 for testing app
  - a redux store in `./src/redux/modules`
  - `test-track.mp3` in the root folder to test the file upload
- You can use redux for the state store and not required to physically store the file
- You will not be assessed for the unit testing of the code but the project must run and requirements must be met
- Whilst UI is not essential it must be functional