import React from "react";

const buttonStyle = {
    margin: '10px'
};

// 无状态组件由于不用维护state，因此无需使用class组件，使用函数组件即可
function Counter(props:any) {
    const {caption, value, onIncrement, onDecrement} = props;
    return (
        <div>
            <button style={buttonStyle} onClick={onIncrement}>+</button>
            <button style={buttonStyle} onClick={onDecrement}>-</button>
            <span>{caption} count: {value}</span>
        </div>
    );
}

export default Counter;