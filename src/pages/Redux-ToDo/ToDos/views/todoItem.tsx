import React from 'react';
import { List } from 'antd';

import {removeTodo, toggleTodo} from "../actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Operator from "./model";
const TodoItem = (props:any) => {
  const {onToggle, onRemove, completed, text , colorType} = props;
  const checkedProp = completed ? {checked: true} : {};
  console.log('enter TodoItem render: ' + text + colorType);
  return (
        <List
            grid={{ gutter: 100, column: 2 }}
        >
          <label className="text" >{text}
            {/*<Checkbox {...checkedProp}  onClick={onToggle} />
            <Button onClick={onRemove}><CloseOutlined /></Button>*/}
            <Operator onToggle = {onToggle} onRemove = {onRemove}  checkedProp = {checkedProp} />
          </label>

        </List>
  );
}


TodoItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  colorType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

// ownProps: 父组件传递过来的props，自己处理事务
const mapDispatchToProps = (dispatch:any, ownProps:any) => {
  const {id} = ownProps;
  return {
    onToggle: () => dispatch(toggleTodo(id,'#ffd11f')),
    onRemove: () => dispatch(removeTodo(id))
  }
};

// connect 原理详见public/readme文档
// mapStateToProps函数允许我们将 store 中的数据作为 props 绑定到组件上。
// mapDispatchToProps将action 作为 props 绑定到组件上，也会成为 MyComp 的 props
export default connect(null, mapDispatchToProps)(TodoItem);
