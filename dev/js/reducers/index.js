import {combineReducers} from 'redux'
import BoardReducer from './reducer-board'
import PiecesReducer from './reducer-pieces'
import GameReducer from './reducer-game'

const allReducers = combineReducers({
  boardProps: BoardReducer,
  piecesProps: PiecesReducer,
  gameProps: GameReducer
})

export default allReducers
