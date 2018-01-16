import _ from 'lodash'

export const setPiece = (selectedSquare, selectedPiece, AllSquares, AllPieces, completeGame) => {
  const squares = _.cloneDeep(AllSquares)
  const pieces = _.cloneDeep(AllPieces)
  const square = {position: selectedSquare.position, piece: selectedPiece.position}

  if (selectedPiece.piece && selectedPiece.piece !== undefined) square.piece = selectedPiece.piece

  const restorePiece = (selectedSquare.piece && selectedSquare.piece !== null && selectedPiece.piece === undefined) ? selectedSquare.piece : 0

  squares.forEach((s, i) => {
    if (s.piece === square.piece) squares[i].piece = selectedSquare.piece
    if (s.position === square.position) squares[i] = square
  })

  pieces.forEach((p, i) => {
    if (p.position === restorePiece) pieces[i].visible = true
    if (p.position === square.piece) pieces[i].visible = false
  })

  if (squares.filter((s) => { return s.piece === s.position }).length === 9) {
    completeGame()
  }

  return {
    type: 'ON_SET_SQUARE',
    payload: {squares, pieces}
  }
}

export const sendBackPiece = (selectedPiece, AllPieces, AllSquares) => {
  const squares = _.cloneDeep(AllSquares)
  const pieces = _.cloneDeep(AllPieces)

  if (selectedPiece.piece !== undefined) {
    pieces.forEach((p, i) => {
      if (p.position === selectedPiece.piece) pieces[i].visible = true
    })

    squares.forEach((s, i) => {
      if (s.piece === selectedPiece.piece) squares[i].piece = null
    })
  }

  return {
    type: 'ON_SEND_BACK_PIECE',
    payload: {squares, pieces}
  }
}

const onStoreFile = (uri) => {
  return {
    type: 'ON_STORE_FILE',
    payload: {uri}
  }
}

export const storeFile = (files) => {
  return (dispatch, getState) => {
    const FR = new FileReader()

    FR.addEventListener('load', (e) => {
      dispatch(onStoreFile(e.target.result))
    })

    FR.readAsDataURL(files[0])
  }
}

export const updateNameField = (nameField) => {
  return {
    type: 'ON_UPDATE_NAME_FIELD',
    payload: {nameField}
  }
}

export const setName = (name, start) => {
  start()
  return {
    type: 'ON_SET_NAME',
    payload: {name, started: true}
  }
}

const onUpdateTimer = () => {
  return {
    type: 'ON_UPDATE_TIMER',
    payload: {}
  }
}

const onStartTimer = () => {
  return {
    type: 'ON_START_TIMER',
    payload: {startTime: Date.now()}
  }
}

export const startTimer = () => {
  return (dispatch, getState) => {
    dispatch(onStartTimer())
    window.inter = setInterval(() => {
      dispatch(onUpdateTimer())
    }, 1)
  }
}

const onCompleteGame = (topTen) => {
  window.localStorage.setItem('top', JSON.stringify(topTen))
  return {
    type: 'ON_COMPLETE_GAME',
    payload: {topTen}
  }
}

export const completeGame = (name, score, topTen) => {
  return (dispatch, getState) => {
    clearInterval(inter)
    const topTenCopy = _.cloneDeep(topTen)
    topTenCopy.push({name: name.toUpperCase(), score})
    topTenCopy.sort((a, b) => { return a.score - b.score })
    dispatch(onCompleteGame(topTenCopy.slice(0, 10)))
  }
}

export const onPlay = () => {
  return {
    type: 'ON_PLAY',
    payload: {play: true}
  }
}

export const loadTopTen = () => {
  const topTen = (window.localStorage.getItem('top') && window.localStorage.getItem('top') !== null) ? JSON.parse(window.localStorage.getItem('top')) : []

  return {
    type: 'ON_LOAD_TOP_TEN',
    payload: {topTen}
  }
}

export const showTopTen = () => {
  return {
    type: 'ON_SHOW_TOP_TEN',
    payload: {displayTopTen: true}
  }
}

export const tryAgain = () => {
  return {
    type: 'ON_TRY_AGAIN',
    payload: {}
  }
}
