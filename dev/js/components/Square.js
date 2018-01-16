import React, {Component} from 'react'
import {connect} from 'react-redux'
import { DropTarget, DragSource } from 'react-dnd'

class Square extends Component {
  render () {
    const { connectDragSource, connectDropTarget, piece, uri } = this.props
    const pieceClass = (piece && piece !== null) ? `i${piece}` : ''
    const style = (uri !== null && piece !== null) ? {backgroundImage: `url(${uri})`} : {}
    return connectDragSource(connectDropTarget(
            <div className={`square ${pieceClass}`} style={style}></div>
        ))
  }
}

const mapStateToProps = (state) => {
  return {}
}

const squareTarget = {
  drop (props, monitor) {
    props.setPiece(props, monitor.getItem())
  }
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const collectSqaure = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const squareSource = {
  canDrag (props) {
    return (props.piece !== null)
  },
  beginDrag (props) {
    return props
  }
}

export default DragSource('PIECE', squareSource, collectSqaure)(DropTarget('PIECE', squareTarget, collect)(connect(mapStateToProps)(Square)))
