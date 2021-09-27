export const SET_USERS = 'SET_USERS';
export const SET_THEME = 'SET_THEME';
export const SET_SELECTED_USER = 'SET_SELECTED_USER';
export const SET_SEARCH_WORD = 'SET_SEARCH_WORD';

export const setUsers = payload => ({
  type: SET_USERS,
  payload,
});

export const setTheme = payload => ({
  type: SET_THEME,
  payload,
});

export const setSelectedUser = payload => ({
  type: SET_SELECTED_USER,
  payload,
});

export const setSearchWord = payload => ({
  type: SET_SEARCH_WORD,
  payload,
});
