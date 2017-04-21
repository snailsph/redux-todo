import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
//用户新增数据的容器，绑定dispatch触发state更新
let AddTodo = ({dispatch}) => {
  let input;
  return (
    <div>
      <form onSubmit={ e => {
        e.preventDefault();
        console.log('input value' + input.value);
        if(!input.value.trim()){
          return
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
      <input ref={
        node => {
          input = node;
        }}/>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo);
export default AddTodo;
