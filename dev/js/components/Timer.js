import React, {Component} from 'react'
import {connect} from 'react-redux'

class Timer extends Component {
  _format (ms) {
    return ms.toString().substring(0, (ms.toString().length - 3)) + '.' + ms.toString().substring((ms.toString().length - 3))
  }

  render () {
    const {ms} = this.props
    return (
            <span className="timer">{this._format(ms)}</span>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    squares: state.boardProps.squares,
    pieces: state.piecesProps.pieces
  }
}

export default connect(mapStateToProps)(Timer)
