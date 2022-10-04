import {Button, Checkbox} from "antd";
import {CloseOutlined} from "@ant-design/icons";
import React from "react";

export const Operator = (props:any) =>{
    const {onRemove, onToggle, checkedProp} = props
    console.log(props)
    return (
        <span>
            <Checkbox {...checkedProp}  onClick={onToggle} />
            <Button onClick={onRemove}><CloseOutlined /></Button>
        </span>
    )
}