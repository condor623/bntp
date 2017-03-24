import { combineReducers } from 'redux';

import { RECEIVE_BOOKMARKS, TOGGLE_FOLDER_COLLAPSE } from '../actions';

function bookmarkFolders(state = [], action) {
  switch (action.type) {
    case RECEIVE_BOOKMARKS:
      return action.folders;
    default:
      return state;
  }
}

function collapsedFolders(state = [], action) {
  switch (action.type) {
    case TOGGLE_FOLDER_COLLAPSE:
      if (action.collapsed) {
        return [action.folder, ...state];
      } else {
        return state.filter(folder => folder !== action.folder);
      }
    default:
      return state;
  }
}

export default combineReducers({
  bookmarkFolders,
  collapsedFolders
})
