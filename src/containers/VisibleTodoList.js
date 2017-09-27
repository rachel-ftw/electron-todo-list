import { connect } from 'react-redux'
import { toggleTodo, toggleFavorite } from '../actions'
import TodoList from '../components/TodoList'

//reducer
const getVisibleTodos = (todos, filter) => {
  console.log(todos)
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_FAVORITES':
      return todos.filter(t => t.favorite)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  onTodoClick: toggleTodo,
  onFavClick: toggleFavorite
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
