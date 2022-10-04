import React, {useState} from "react";
import {Button, Checkbox, Form, Input} from "antd";
import {ADD_TODO, REMOVE_TODO, RESET_TODO, UPDATE_TODO} from "@/pages/Mobx-ToDo/model";

export const OperateTodoItem = (props:any) =>  {
    const {addData} = props;
    const [value, setValue] = useState("默认事项");
    const onInputChange = (event:any) => {
        setValue(event.target.value);
    }
    return (
        <div>
            <Form className={"from-cell"}>
                <Input className={"input-area"} onChange={onInputChange} value={value}/>
                <Button className={"button-area"} type="primary" htmlType="submit" onClick={() => {
                    addData(ADD_TODO,value)
                    setValue("")
                }}>
                    添加
                </Button>
                <Button className={"button-area"} type="primary" onClick={() => addData(RESET_TODO)}>重置</Button>
            </Form>
        </div>
    )
}

export const UpdateTodoItem = (props:any) =>  {
    const {updateData, data} = props;
    const checkedProp = data.completed ? {checked: true} : {checked:false};
    return (
        <div>
            <Checkbox {...checkedProp}  onChange={(event:any) =>{
                event.preventDefault();
                updateData(UPDATE_TODO, data, event.target.checked);
            }} />
            <Button key={data.index} onClick={(event:any)=>{
                event.preventDefault();
                updateData(REMOVE_TODO, data, false)
            }}>删除</Button>
        </div>
    )
}
