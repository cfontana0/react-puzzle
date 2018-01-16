import React, {Component} from 'react'
import {connect} from 'react-redux'
import { DropTarget } from 'react-dnd'
import Piece from './Piece'

class Pieces extends Component {
  render () {
    const { connectDropTarget, pieces, uri } = this.props
    const PiecesList = (pieces || []).filter((piece) => { return piece.visible }).map((piece) => {
      return (
                <Piece uri={uri} key={piece.position} position={piece.position}/>
      )
    })
    return connectDropTarget(
            <div className="pieces">
                {PiecesList}
            </div>
        )
  }
}

const piecesTarget = {
  drop (props, monitor) {
    props.sendBackPiece(monitor.getItem())
  }
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const mapStateToProps = (state) => {
  return {
    pieces: state.piecesProps.pieces
  }
}

export default DropTarget('PIECE', piecesTarget, collect)(connect(mapStateToProps)(Pieces))
