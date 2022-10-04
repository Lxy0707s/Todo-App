import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form ,Input} from 'antd';
import { addTodo } from '../actions';
import PropTypes from "prop-types";

// action
class AddTodo extends Component<any, any> {
  static propTypes: { onAdd: any };
  constructor(props:any, context:any) {
    super(props, context);
    this.onClick = this.onClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      value: ''
    };
  }
 // preventDefault 用于取消事件的默认行为
  onClick(event:any) {
    event.preventDefault();

    const inputValue = this.state.value;
    if (!inputValue.trim()) {
     return;
    }

    this.props.onAdd(inputValue);
    this.setState({value: ''});
  }

  onInputChange(event:any) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Form >
          <Input onClick={this.onClick} onChange={this.onInputChange} value={this.state.value} />
          <Button  type="primary" htmlType="submit">
            添加
          </Button>
        </Form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
};

// 用于创建组件跟store的state的映射关系，自己处理事务
const mapDispatchToProps = (dispatch:any) => {
  return {
    onAdd: (text:string) => {
      dispatch(addTodo(text));
    }
  }
};

// connect 原理详见public/readme文档
// mapStateToProps函数允许我们将 store 中的数据作为 props 绑定到组件上。
// mapDispatchToProps将action 作为 props 绑定到组件上，也会成为 MyComp 的 props
export default connect(null, mapDispatchToProps)(AddTodo);

