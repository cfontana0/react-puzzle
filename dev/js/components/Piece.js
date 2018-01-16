import React, {Component} from 'react'
import {connect} from 'react-redux'
import { DragSource } from 'react-dnd'

class Pieces extends Component {
  render () {
    const { connectDragSource, uri } = this.props
    const style = (uri !== null) ? {backgroundImage: `url(${uri})`} : {}
    return connectDragSource(
            <div className={`piece i${this.props.position}`} style={style}></div>
        )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const pieceSource = {
  beginDrag (props) {
    return props
  }
}

export default DragSource('PIECE', pieceSource, collect)(connect(mapStateToProps)(Pieces))
