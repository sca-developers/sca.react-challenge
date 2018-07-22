
// Playlist Actions
const ADD_TRACK = 'ADD_TRACK';
const SELECT_TRACK = 'SELECT_TRACK';

// ran out of time to implement this feature
const DELETE_TRACK = 'DELETE_TRACK';


// Playlist Actions Creators:
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

// ran out of time to implement this feature
export function deleteTrack(payload) {
  return { type: DELETE_TRACK, payload };
}

const initialState = {
  sourceRef: [],
  selectedRef: null,
};

// Playlist Reducers:
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
    // ran out of time to implement this feature
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
