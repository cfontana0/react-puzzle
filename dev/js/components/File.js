import React, {Component} from 'react'
import {connect} from 'react-redux'
import Button from '../components/Button'

class File extends Component {
  render () {
    const { onChange } = this.props
    return (
            <div>
                <input ref={input => { this.inputElement = input }} type='file' onChange={(e) => onChange(e) }/>
                <Button text="Pick Image" className="blue" onClick={() => this.inputElement.click() }/>
            </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(File)
