const initialState = {
  username: '',
  isLoggingIn: false,
  isLoggedIn: false,
  loginFailed: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_ATTEMPT':
      return {
        isLoggingIn: true,
        isLoggedIn: false,
        username: action.username,
      };
    case 'LOGIN_FAILED':
      return {
        error: action.error,
        isLoggingIn: false,
        isLoggedIn: false,
        loginFailed: true
      };
    case 'LOGIN_SUCCESSFUL':
      return {
        error: null,
        isLoggingIn: false,
        isLoggedIn: true,
        loginFailed: false,
      };
      break;
    default:
      return state;
  }
};



// console.log('login reducer triggered')
// switch (action.type) {
// case 'LOGIN_INPUT':
//   return {
//     ...state,
//     loggedIn: !state.loggedIn
//   }
//   default: 
//     return state;
// }

// loggedIn: false,
// account: { username: 'user1', password: 123456 },
// countries: [
//     { name: 'Canada' },
//     { name: 'United States' },
//     { name: 'Mexico' },
//     { name: 'United Kingdom' },
//     { name: 'France' }
// ],
// selectedCountryIndex: -1,
// options: ['Help', 'About', 'Settings', 'Advanced']