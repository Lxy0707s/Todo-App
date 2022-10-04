
export const ADD_TODO = 'TODO/ADD';
export const TOGGLE_TODO = 'TODO/TOGGLE';
export const REMOVE_TODO = 'TODO/REMOVE';

let nextTodoId = 0;

// action 行为规范
export const addTodo = (text:string) => ({
  type: ADD_TODO,
  completed: false,
  colorType: '#6e776d',
  id: nextTodoId ++,
  text: text
});

export const toggleTodo = (id:number, color:string) => ({
  type: TOGGLE_TODO,
  colorType: color,
  id: id
});

export const removeTodo = (id:number) => ({
  type: REMOVE_TODO,
  id: id
});

