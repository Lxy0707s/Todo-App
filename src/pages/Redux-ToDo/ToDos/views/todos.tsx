import React from 'react';
import AddTodo from './addTodo';
import TodoList from './todoList';


export const ToDoView: React.FC = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default ToDoView;

