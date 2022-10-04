export const SET_FILTER = 'FILTER/SET';


export const setFilter = (filterType:any) => ({
  type: SET_FILTER,
  filter: filterType
});
