import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onFavClick }) => (
  <div>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClickComp={() => onTodoClick(todo.id)}
        onClickFav={() => onFavClick(todo.id)}
      />
    )}
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onFavClick: PropTypes.func.isRequired
}

export default TodoList
