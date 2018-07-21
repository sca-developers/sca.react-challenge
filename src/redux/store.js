import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { audioPlayer, playlist } from './modules';

// Create Redux Store
const store = createStore(
  combineReducers({ playlist, audioPlayer }),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
);

export default store;
