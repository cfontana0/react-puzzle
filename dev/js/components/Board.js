import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Square from './Square'
import {setPiece} from '../actions/index'

class Board extends Component {
  render () {
    const { squares, pieces, setPiece, uri, completeGame } = this.props
    const SaquareList = (squares || []).map((square) => {
      return (
                <Square uri={uri} key={square.position} position={square.position} piece={square.piece} setPiece={(square, piece) => setPiece(square, piece, squares, pieces, completeGame) }/>
      )
    })
    return (
            <div className="board">
                {SaquareList}
            </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    squares: state.boardProps.squares,
    pieces: state.piecesProps.pieces
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({setPiece: setPiece}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Board)
