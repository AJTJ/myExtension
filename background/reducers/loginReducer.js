const initialState = {
  username: '',
  isLoggingIn: false,
  isLoggedIn: false,
  loginFailed: false,
  error: null,
  countries: [],
  selectedCountryIndex: null,
  options: [],
  cancelling: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGGING_IN':
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false,
        loginFailed: false,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        loginFailed: true
      };
    case 'LOGIN_SUCCESSFUL':
      return {
        ...state,
        error: null,
        isLoggingIn: false,
        isLoggedIn: true,
        loginFailed: false,
        username: action.username,
        countries: action.countries,
        selectedCountryIndex: action.selectedCountryIndex,
        options: action.options
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        loginFailed: false,
        username: '',
        countries: [],
        options: [],
        selectedCountryIndex: null,
      };
    case 'CHANGE_COUNTRY':
      return {
        ...state,
        selectedCountryIndex: action.selectedCountryIndex
      }
    case 'CANCEL_LOGIN':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        loginFailed: false,
      }
      break;
    default:
      return state;
  }
};