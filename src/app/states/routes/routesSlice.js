import { createSlice } from '@reduxjs/toolkit';

const apiEndpoint = 'https://srodrig-departure-time-api.herokuapp.com/api/v1/routes';

const slice = createSlice({
  name: 'routes',
  initialState: {
    value: [],
    status: 'fetching',
  },
  reducers: {
    populate: (state, action) => {
      state.value.push(...action.payload);
      state.status = 'success';
    },
    failFetching: state => {
      state.value = [];
      state.status = 'failure';
    }
  },
});

export const { populate, failFetching } = slice.actions;

export const populateAsync = () => dispatch => {
  fetch(
    apiEndpoint,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': '*/*',
      },
    },
  )
    .then(response => response.json())
    .then(payload => dispatch(populate(payload)))
    .catch(err => dispatch(failFetching()));
}

export const selectRoutes = state => state.routes;

export default slice.reducer;