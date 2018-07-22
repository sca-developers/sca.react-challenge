

// PLACE YOUR ACTIONS HERE:

// playlist mangement
const ADD_TRACK = 'ADD_TRACK';
const SELECT_TRACK = 'SELECT_TRACK';
const DELETE_TRACK = 'DELETE_TRACK';


// PLACE YOUR ACTION CREATORS HERE:
export function addTrack(source, name) {
  const payload = {
    timestamp: Date.now(),
    source,
    name,
  };
  return { type: ADD_TRACK, payload };
}

export function selectTrack(sourceRef, timeStamp) {
  let payload;
  const foundTrack = sourceRef.find(item => item.timestamp === timeStamp);
  if (foundTrack) {
    payload = {
      ...foundTrack,
    };
  } else {
    payload = null;
  }

  return { type: SELECT_TRACK, payload };
}

export function deleteTrack(payload) {
  return { type: DELETE_TRACK, payload };
}


const initialState = {
  sourceRef: [],
  selectedRef: null,
};

// PLACE YOUR REDUCERS HERE:

const playlists = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRACK:
      return {
        ...state,
        sourceRef: [...state.sourceRef, action.payload],
        selectedRef: action.payload,
      };
    case SELECT_TRACK:
      return {
        ...state,
        selectedRef: action.payload || this.state.selectedRef,
      };
    case DELETE_TRACK:
      return {
        ...state,
        sourceRef: action.sourceRef,
      };
    default:
      return state;
  }
};

export default playlists;
