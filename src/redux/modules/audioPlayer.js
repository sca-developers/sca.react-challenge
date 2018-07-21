

// PLACE YOUR ACTIONS HERE:

// Player Control
const START_TRACK = 'START_TRACK';
const PAUSE_TRACK = 'PAUSE_TRACK';
const STOP_TRACK = 'STOP_TRACK';


// PLACE YOUR ACTION CREATORS HERE:
export function startTrack(payload) {
  return { type: START_TRACK, payload };
}

export function pauseTrack() {
  return { type: PAUSE_TRACK };
}

export function stopTrack() {
  return { type: STOP_TRACK };
}


const initialState = {
  currentTime: null,
  elapsedTime: null,
};

// PLACE YOUR REDUCERS HERE:
const audioPlayer = (state = initialState, action) => {
  switch (action.type) {
    case START_TRACK:
      return {
        ...state,
        currentTime: action.payload,
      };
    case PAUSE_TRACK:
      return {
        ...state,
        currentTime: null,
      };
    case STOP_TRACK:
      return {
        ...state,
        currentTime: null,
      };
    default:
      return state;
  }
};

export default audioPlayer;
