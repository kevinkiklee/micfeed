export const RECEIVE_SEARCH_STRING = 'RECEIVE_SEARCH_STRING';

export const receiveSearchString = (string) => ({
  type: RECEIVE_SEARCH_STRING,
  string
});

export const setSearchString = (string) => dispatch => {
  return () => {
    dispatch(receiveSearchString(string));
  };
};
