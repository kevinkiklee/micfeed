import cookie from 'react-cookie';

export const RECEIVE_SORT = 'RECEIVE_SORT';

export const receiveSort = (sort) => ({
  type: RECEIVE_SORT,
  sort
});

// After the store is updated, the sort order cookie is updated
export const setSort = (sort) => dispatch => {
  return () => {
    dispatch(receiveSort(sort));
    const sortString = `${sort.column}-${sort.order}`;
    cookie.save('sort', sortString);
  };
};
