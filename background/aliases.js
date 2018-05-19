const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOG_OUT = 'LOG_OUT';
const LOGGING_IN = 'LOGGING_IN';
const CANCEL_LOGIN = 'CANCEL_LOGIN';

let timer = null;
//here the login attempt is begun
const loginAttempt = (data) => {
  return (
    (!data ? (
      console.log('no data')
    ) : (
    dispatch => {
      dispatch(checkLogin(data))
    }))
  )
};

const cancelLogin = () => {
  return {
    type: CANCEL_LOGIN
  }
}

//sets the state to isLoggingIn
const beginLogin = () => {
  return {
    type: LOGGING_IN
  }
}

//checks the login data vs the 'server'
const checkLogin = (data) => {
  if (!data.username || !data.password) {
    return {
      type: LOGIN_FAILED
    }
  } else if (data.username === 'user1' && data.password === '123456') {
    return {
      type: LOGIN_SUCCESSFUL,
      username: data.username,
      countries: [
        { name: 'Canada' },
        { name: 'United States' },
        { name: 'Mexico' },
        { name: 'United Kingdom' },
        { name: 'France' }
      ],
      options: [
        'Help', 'About', 'Settings', 'Advanced'
      ],
      selectedCountryIndex: 0,
    }
  } else {
    return {
      type: LOGIN_FAILED
    }
  }
}

//to set the state to loggedOut
const logOut = () => {
  return {
    type: LOG_OUT
  }
}

export default {
  CANCEL_LOGIN: cancelLogin,
  LOGIN_ATTEMPT: loginAttempt,
  LOG_OUT: logOut,
  LOGGING_IN: beginLogin
};