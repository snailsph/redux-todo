import React from 'react';
//列表的单个item组件 接受父组件onClick, completed, text
const Todo = ({ onClick, completed, text}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
    >
    {text}
  </li>
);

export default Todo;
