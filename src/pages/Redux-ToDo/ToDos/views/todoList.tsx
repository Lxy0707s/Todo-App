import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './todoItem';
import { selectVisibleTodos } from '../selector'
import PropTypes from "prop-types";

const TodoList = ({todos,onClickTodo}:any) => {
  return (
    <ul className="todo-list">
    {
      todos.map((item:any) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          colorType={item.colorType}
          completed={item.completed}
        />
        ))
    }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

const mapStateToProps = (state:any) => {
  return {
    todos: selectVisibleTodos(state)
  };
}

// connect 原理详见public/readme文档
// mapStateToProps函数允许我们将 store 中的数据作为 props 绑定到组件上。
// mapDispatchToProps将action 作为 props 绑定到组件上，也会成为 MyComp 的 props
export default connect(mapStateToProps)(TodoList);

