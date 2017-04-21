import React from 'react';
import Todo from './Todo';
//列表组件
const TodoList = ({ todos,onTodoClick }) => (
  <ul>
    {
      todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )
    }
  </ul>
);

export default TodoList;
