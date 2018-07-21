

// PLACE YOUR ACTIONS HERE:

// playlist mangement
const ADD_TRACK = 'ADD_TRACK';
const DELETE_TRACK = 'DELETE_TRACK';


// PLACE YOUR ACTION CREATORS HERE:
export function addTrack(payload) {
  return { type: ADD_TRACK, payload };
}

export function deleteTrack(payload) {
  return { type: DELETE_TRACK, payload };
}


const initialState = {
  sourceRef: null,
  sourceId: null,
};

// PLACE YOUR REDUCERS HERE:

const playlists = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRACK:
      return {
        ...state,
        sourceRef: action.payload,
        sourceId: action.payload,
      };
    case DELETE_TRACK:
      return {
        ...state,
        sourceRef: action.sourceRef,
        sourceId: action.sourceRef,
      };
    default:
      return state;
  }
};

export default playlists;
