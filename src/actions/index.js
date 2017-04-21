/**
页面分析action：action必须定义type属性
  根据用户的操作：
      1、新增
      2、点击列表修改列表状态
      3、点击过滤不同条件的显示不同列表
**/

let nextTodoId = 0;//新增列表对应的id
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});
