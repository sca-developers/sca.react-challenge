

// PLACE YOUR ACTIONS HERE:

// Player Control
const PLAY_TRACK = 'PLAYER_TRACK';
const PAUSE_TRACK = 'PAUSE_TRACK';
const STOP_TRACK = 'STOP_TRACK';


// PLACE YOUR ACTION CREATORS HERE:
export function playTrack() {
  return { type: PLAY_TRACK };
}

export function pauseTrack() {
  return { type: PAUSE_TRACK };
}

export function stopTrack() {
  return { type: STOP_TRACK };
}


const initialState = {
  sourceRef: null,
  sourceId: null,
};

// PLACE YOUR REDUCERS HERE:
const audioPlayer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_TRACK:
      return {
        ...state,
        sourceRef: action.sourceRef,
        sourceId: action.sourceRef,
      };
    case PAUSE_TRACK:
      return {
        ...state,
        sourceRef: action.sourceRef,
        sourceId: action.sourceRef,
      };
    case STOP_TRACK:
      return {
        ...state,
        sourceRef: action.sourceRef,
        sourceId: action.sourceRef,
      };
    default:
      return state;
  }
};

export default audioPlayer;
