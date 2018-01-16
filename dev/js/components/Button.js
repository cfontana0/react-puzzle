import React, {Component} from 'react'
import {connect} from 'react-redux'

class Button extends Component {
  render () {
    const { text, onClick, className } = this.props
    return (
            <button onClick={() => onClick()} className={className}>
                {text}
            </button>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(Button)
