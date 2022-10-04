import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO}from './actions';

// ToDos组件store状态
const reducer = (state = [], action:any) => {

  switch(action.type) {
    case ADD_TODO: {
      return [
        {
          id: action.id,
          text: action.text,
          colorType: action.colorType,
          completed: false
        },
        ...state
      ]
    }
    case TOGGLE_TODO: {
      return state.map((todoItem:any) => {
        if (todoItem.id === action.id) {
           return {...todoItem, completed: !todoItem.completed, colorType: todoItem.colorType};
        } else {
          return todoItem;
        }
      })
    }
    case REMOVE_TODO: {
      return state.filter((todoItem:any) => {
        return todoItem.id !== action.id;
      })
    }
    default: {
      return state;
    }
  }
}

export default reducer;