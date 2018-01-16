const initialState = {
  squares: [
    {position: 1, piece: null},
    {position: 2, piece: null},
    {position: 3, piece: null},
    {position: 4, piece: null},
    {position: 5, piece: null},
    {position: 6, piece: null},
    {position: 7, piece: null},
    {position: 8, piece: null},
    {position: 9, piece: null}
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ON_SET_SQUARE':
      return {...state, squares: action.payload.squares}
    case 'ON_SEND_BACK_PIECE':
      return {...state, squares: action.payload.squares}
    case 'ON_TRY_AGAIN':

      const squares = [
                    {position: 1, piece: null},
                    {position: 2, piece: null},
                    {position: 3, piece: null},
                    {position: 4, piece: null},
                    {position: 5, piece: null},
                    {position: 6, piece: null},
                    {position: 7, piece: null},
                    {position: 8, piece: null},
                    {position: 9, piece: null}
      ]

      return {...state, squares}
    default:
      return state
  }
}
