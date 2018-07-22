

// PLACE YOUR ACTIONS HERE:

// Player Control
const START_TRACK = 'START_TRACK';
const PAUSE_TRACK = 'PAUSE_TRACK';
const STOP_TRACK = 'STOP_TRACK';


// PLACE YOUR ACTION CREATORS HERE:
export function startTrack(payload) {
  return { type: START_TRACK, payload };
}

export function pauseTrack(payload) {
  return { type: PAUSE_TRACK, payload };
}

export function stopTrack() {
  return { type: STOP_TRACK };
}


const initialState = {
  elapsedTime: 0,
  isStarted: false,
  isPaused: false,
  isStopped: false,
};

// PLACE YOUR REDUCERS HERE:
const audioPlayer = (state = initialState, action) => {
  switch (action.type) {
    case START_TRACK:
      return {
        ...state,
        elapsedTime: action.payload,
        isStarted: true,
        isPaused: false,
        isStopped: false,
      };
    case PAUSE_TRACK:
      return {
        ...state,
        elapsedTime: action.payload,
        isPaused: true,
      };
    case STOP_TRACK:
      return {
        ...state,
        elapsedTime: 0,
        isStarted: false,
        isPaused: false,
        isStopped: true,
      };
    default:
      return state;
  }
};

export default audioPlayer;
