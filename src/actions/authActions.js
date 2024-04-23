// // src/actions/authActions.js
// export const LOGIN_REQUEST = 'LOGIN_REQUEST';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// export const loginRequest = (payload) => ({
//   type: LOGIN_REQUEST,
//   payload
// });

// export const loginSuccess = (user) => ({
//   type: LOGIN_SUCCESS,
//   payload: user
// });

// export const loginFailure = (error) => ({
//   type: LOGIN_FAILURE,
//   payload: error
// });



// src/actions/authActions.js

import history  from '../histroy'; // Assuming you have a custom history object
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Redirect to the specified path
export const redirectTo = (path) => {
  history.push(path);
};
