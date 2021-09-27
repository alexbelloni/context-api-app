import {
  SET_USERS,
  SET_SELECTED_USER,
  SET_SEARCH_WORD,
  SET_THEME,
} from './actions';

/**
 * Initial state of the app
 */
export const INITIAL_STATE = {
  selectedUser: 0,
  users: [],
  theme: { mode: 'light' },
}

export default function reducer(state, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    case SET_SEARCH_WORD:
      return {
        ...state,
        filteredUsers: state.users.filter(u => u.name.toLowerCase().indexOf(action.payload.toLowerCase()) >= 0),
      };
    case SET_THEME:
      return {
        ...state,
        theme: { mode: action.payload },
      };
    default:
      return state;
  }
}
