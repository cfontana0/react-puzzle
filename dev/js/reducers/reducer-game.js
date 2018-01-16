const initialState = {
  uri: null,
  nameField: '',
  name: '',
  ms: 0,
  startTime: null,
  play: false,
  started: false,
  topTen: [],
  completed: false,
  displayTopTen: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ON_STORE_FILE':
      return {...state, uri: action.payload.uri}
    case 'ON_UPDATE_NAME_FIELD':
      return {...state, nameField: action.payload.nameField}
    case 'ON_SET_NAME':
      return {...state, name: action.payload.name, nameField: '', started: true}
    case 'ON_UPDATE_TIMER':
      const current = Date.now()
      const diff = current - state.startTime
      return {...state, ms: diff}
    case 'ON_START_TIMER':
      return {...state, startTime: action.payload.startTime}
    case 'ON_PLAY':
      return {...state, play: action.payload.play}
    case 'ON_COMPLETE_GAME':
      return {...state, topTen: action.payload.topTen, completed: true}
    case 'ON_SHOW_TOP_TEN':
      return {...state, displayTopTen: action.payload.displayTopTen}
    case 'ON_LOAD_TOP_TEN':
      return {...state, topTen: action.payload.topTen}
    case 'ON_TRY_AGAIN':
      return { ...state, uri: null, nameField: '', name: '', ms: 0, startTime: null, play: false, started: false, completed: false, displayTopTen: false }
    default:
      return state
  }
}
