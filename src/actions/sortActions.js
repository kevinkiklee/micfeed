export const RECEIVE_SORT = 'RECEIVE_SORT';

export const receiveSort = (sort) => ({
  type: RECEIVE_SORT,
  sort
});

export const setSort = (sort) => dispatch => {
  return (sort) => dispatch(receiveSort(sort));
};
