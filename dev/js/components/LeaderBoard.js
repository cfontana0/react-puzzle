import React, {Component} from 'react'
import {connect} from 'react-redux'

class LeaderBoard extends Component {
  render () {
    const { topTen } = this.props

    const List = (topTen || []).map((player, i) => {
      return (<li key={i}>{i + 1}) {player.name} {player.score.toString().substring(0, (player.score.toString().length - 3)) + '.' + player.score.toString().substring((player.score.toString().length - 3))}</li>)
    })
    return (
            <div className="leader-board">
                <ul>
                    {List}
                </ul>
            </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(LeaderBoard)
