import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClickComp, completed, text, favorite, onClickFav }) => (
  <div>
    <div
      onClick={onClickComp}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        backgroundColor: favorite ? 'yellow' : ''
      }}
    >
      {text}
    </div>
    <p onClick={onClickFav}>favorite</p>
  </div>
)

Todo.propTypes = {
  onClickComp: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  onClickFav: PropTypes.func.isRequired
}

export default Todo
