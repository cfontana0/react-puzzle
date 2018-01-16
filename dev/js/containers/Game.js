import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { DragDropContext } from 'react-dnd'
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend'
import Board from '../components/Board'
import Pieces from '../components/Pieces'
import Timer from '../components/Timer'
import Button from '../components/Button'
import File from '../components/File'
import Popup from '../components/Popup'
import LeaderBoard from '../components/LeaderBoard'
import {sendBackPiece, storeFile, updateNameField, setName, startTimer, completeGame, onPlay, loadTopTen, showTopTen, tryAgain} from '../actions/index'

class Game extends Component {
  componentDidMount () {
    this.props.loadTopTen()
  }

  render () {
    const { game, pieces, squares, storeFile, sendBackPiece, updateNameField, setName, completeGame, startTimer, onPlay, showTopTen, tryAgain } = this.props
    return (
            <div>
                { !game.play &&
                    <Button text="Play now" className="centered" onClick={() => onPlay()}/>
                }
                { game.play &&
                    <div>
                        { !game.started &&
                            <div className="centered">
                                <img src={game.uri} className="display-img"/>
                                <input value={game.nameField} placeholder="Your name" type="text" onChange={(e) => updateNameField(e.target.value)} className="display-input"/>
                                <File onChange={(e) => storeFile(e.target.files)}/>
                                <Button className={(game.nameField.length === 0 || game.uri === null) && `disabled`} text="Start now!" onClick={() => (game.nameField.length > 0 && game.uri !== null) && setName(game.nameField, () => { startTimer() })}/>
                            </div>
                        }
                        { game.started &&
                            <div>
                                <div className="player-data">
                                    <span>{game.name.toUpperCase()}</span>
                                    <Timer ms={game.ms}/>
                                </div>
                                <Board uri={game.uri} completeGame={() => { completeGame(game.name, game.ms, game.topTen) }}/>
                                <Pieces uri={game.uri} sendBackPiece={(piece) => sendBackPiece(piece, pieces, squares) }/>
                            </div>
                        }
                    </div>
                }
                { game.completed &&
                    <Popup>
                        <div>
                            <div className="circle">
                                <div className="star"></div>
                            </div>
                            { !game.displayTopTen &&
                                <div>
                                    <h2>Completed on {game.ms.toString().substring(0, (game.ms.toString().length - 3)) + '.' + game.ms.toString().substring((game.ms.toString().length - 3))} S</h2>
                                    <h3>Well done!</h3>
                                    <div className="modal-btns">
                                        <Button text="Try again" onClick={() => { tryAgain() }}/>
                                        <Button className="blue" text="Top ten" onClick={() => showTopTen() }/>
                                    </div>
                                </div>
                            }
                            { game.displayTopTen &&
                                <div>
                                    <h2>Top Ten</h2>
                                    <LeaderBoard topTen={game.topTen}/>
                                    <div className="modal-btns">
                                        <Button className="full-width" text="Try again" onClick={() => { tryAgain() }}/>
                                    </div>
                                </div>
                            }
                        </div>
                    </Popup>
                }
            </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pieces: state.piecesProps.pieces,
    squares: state.boardProps.squares,
    game: state.gameProps
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sendBackPiece: sendBackPiece,
    storeFile: storeFile,
    updateNameField: updateNameField,
    setName: setName,
    startTimer: startTimer,
    completeGame: completeGame,
    onPlay: onPlay,
    loadTopTen: loadTopTen,
    showTopTen: showTopTen,
    tryAgain: tryAgain
  }, dispatch)
}

export default DragDropContext(HTML5Backend)(connect(mapStateToProps, matchDispatchToProps)(Game))
