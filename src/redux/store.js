import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { audioPlayer, playlists } from './modules';

// Create Redux Store
const store = createStore(
  combineReducers({ audioPlayer, playlists }),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
);

export default store;
