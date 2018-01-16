import React, {Component} from 'react'
import {connect} from 'react-redux'

class Button extends Component {
  render () {
    const { children } = this.props
    return (
            <div className="popupContainer">
                <div className="overlay"></div>
                <div className="popup">
                    {children}
                </div>
            </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(Button)
