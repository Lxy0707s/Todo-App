import React, {useEffect, useState} from "react";
import {inject, observer} from "mobx-react";
import {OperateTodoItem, UpdateTodoItem} from "@/pages/Mobx-ToDo/MToDo/TodoOperate";
import {ADD_TODO, REMOVE_TODO, RESET_TODO, UPDATE_TODO, TodoModel, FilterTypes} from "@/pages/Mobx-ToDo/model";
import FilterView from "@/pages/Mobx-ToDo/MToDo/MFilter/Filter";
import './style.css'
import {ColumnsType} from "antd/es/table";
import {Table} from "antd";


const TodoView = inject("store")(
    observer( (props:any)=>{
        let { store } = props
        const [dataSource,setDataSource] = useState([])
        const [filterType, setFilterType] = useState("")

        const columns: ColumnsType<TodoModel> = [
            {
                title: "事项id",
                dataIndex: "id",
                key: "id",
                align: "center",
            },
            {
                title: "事项名称",
                dataIndex: "title",
                key: "title",
                align: "center",
            },
            {
                title: "完成状态",
                key: "completed",
                dataIndex: "completed",
                align: "center",
                render: (text:boolean, record:any, index:number) => {
                    if (text) {
                        return "完成"
                    }else {
                        return "未完成"
                    }
                }
            },
            {
                title: "类型",
                dataIndex: "type",
                key: "type",
                align: "center",
            },
            {
                title: "操作",
                dataIndex: "operate",
                key: "operate",
                align: "center",
                render: (text:any, record:TodoModel) => (
                    <div>
                        <UpdateTodoItem data={record}  updateData ={updateData} />
                    </div>
                )
            }
        ];

        const addData = (type:string, title:string) => {
            switch (type) {
                case ADD_TODO:
                    let index = store.todos.length>= 0? store.todos.length:0;
                    let todo: TodoModel = {
                        id: index,
                        key: index,
                        type: ADD_TODO,
                        title: `${title}`,
                        completed: false,
                        colorType: "",
                    }
                    store.addTodo(todo)
                    setDataSource(store.filterTodo(filterType))
                    break;
                case RESET_TODO:
                    store.resetTodo()
                    setDataSource(store.filterTodo(filterType))
                    break;
                default:
            }
        }

        const updateData = (type:any, todo: TodoModel, checked: boolean=false) => {
            switch (type) {
                case REMOVE_TODO:
                    store.deleteTodo(todo)
                    setDataSource(store.filterTodo(filterType))
                    break;
                case UPDATE_TODO:
                    store.updateTodo(todo, checked)
                    setDataSource(store.filterTodo(filterType))
                    break;
            }
        }

        const filterData = (type:string) => {
            if (type === ""){
                type = FilterTypes.ALL
            }
            setFilterType(type)
            setDataSource(store.filterTodo(filterType))
        }

        const refresh = () => {
            if (store.loading){
                setDataSource(store.filterTodo(filterType))
            }
        }

        useEffect(
            () =>{
                refresh()
            }
        )

        return (
            <>
                <div className={"header-cell"} />
                <OperateTodoItem addData ={ addData } />
                <FilterView filterData ={ filterData }/>
                <Table
                    className={"table-cell"}
                    dataSource= { dataSource }
                    columns={ columns }
                    rowClassName={() => 'editable-row'}
                />
            </>
        )
    })
)
export default TodoView;