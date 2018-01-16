const initialState = {
  pieces: [
    {position: 1, visible: true},
    {position: 2, visible: true},
    {position: 3, visible: true},
    {position: 4, visible: true},
    {position: 5, visible: true},
    {position: 6, visible: true},
    {position: 7, visible: true},
    {position: 8, visible: true},
    {position: 9, visible: true}
  ].sort(() => Math.random() - 0.5)
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ON_SET_SQUARE':
      return {...state, pieces: action.payload.pieces}
    case 'ON_SEND_BACK_PIECE':
      return {...state, pieces: action.payload.pieces}
    case 'ON_TRY_AGAIN':

      const pieces = [
                {position: 1, visible: true},
                {position: 2, visible: true},
                {position: 3, visible: true},
                {position: 4, visible: true},
                {position: 5, visible: true},
                {position: 6, visible: true},
                {position: 7, visible: true},
                {position: 8, visible: true},
                {position: 9, visible: true}
      ].sort(() => Math.random() - 0.5)

      return { ...state, pieces }
  }
  return state
}
