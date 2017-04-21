import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
//通过TodoList生成列表容器，绑定dispatch 触发state todos更新
const getVisibleTodos = (todos,filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(t => t.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter:'+ filter);
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos,state.visibilityFilter)
});

const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
