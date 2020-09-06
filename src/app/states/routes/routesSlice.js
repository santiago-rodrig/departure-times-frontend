import { createSlice } from '@reduxjs/toolkit';

const apiEndpoint = 'https://srodrig-departure-time-api.herokuapp.com/api/v1/routes';

const slice = createSlice({
  name: 'routes',
  initialState: [],
  reducers: {
    populate: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const { populate } = slice.actions;

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
    .then(payload => dispatch(populate(payload)));
}

export const selectRoutes = state => state.routes;

export default slice.reducer;