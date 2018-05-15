const initialState = {
  loggedIn: false,
  account: { username: 'user1', password: 123456 },
  countries: [
      { name: 'Canada' },
      { name: 'United States' },
      { name: 'Mexico' },
      { name: 'United Kingdom' },
      { name: 'France' }
  ],
  selectedCountryIndex: -1,
  options: ['Help', 'About', 'Settings', 'Advanced']
}

export default (state = initialState, action) => {
	console.log('login reducer triggered')
	switch (action.type) {
	case 'LOGIN_INPUT':
		return {
      ...state,
      loggedIn: !state.loggedIn
    }
    default: 
      return state;
	}
};
