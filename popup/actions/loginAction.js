const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
const LOGIN_FAILED = 'LOGIN_FAILED';


export function loginAttempt() {
  return {
    type: LOGIN_ATTEMPT,
  };
};

export function loggedIn() {
  return {
    type: LOGIN_SUCCESSFUL,
  };
};

export function loginFailed() {
  return {
    type: LOGIN_FAILED,
  };
};

export function login() {
  return dispatch => {
    dispatch(loginAttempt())
    setTimeout(() => {
      dispatch(loginFailed())
    }, 3000)
  }
}