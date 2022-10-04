/* 文件目录 store/index.js */

import {observable, action, makeObservable} from 'mobx';
import moment from "moment";
import {FilterTypes, setVisibleTodos, TodoModel} from "@/pages/Mobx-ToDo/model";

class TodoStore {
    constructor() {
        makeObservable(this); //mbox 6后需要添加这个组件才会更新
    }

    @observable // 当前时间
    time = '2022-05-10';
    @observable // table 加载状态
    loading: boolean = false;
    @observable // 事件列表长度
    todoLen = 0;
    @observable // 事件列表
    todos:TodoModel[] = [];

    // Filter组件store状态
    @action filterTodo(filter:string) {
        if (filter === ""){
            filter = FilterTypes.ALL
        }
        const newTodos = setVisibleTodos(filter, this.todos);
        this.loading = true;
        return newTodos;
    }


    @action addTodo(todo: TodoModel) {
        this.todos.push(todo);
        this.todoLen++;
        this.loading = false;
    }

    @action updateTodo = (todo:TodoModel, checked:boolean) => {
        this.todos.forEach((value,index,) => {
            if (value.id === todo.id) {
                this.todos[index].completed = checked;
            }
        });
        this.loading = false;
    }

    @action deleteTodo(todo: TodoModel) {
        this.todos.forEach((value,index,) => {
            if (value.id === todo.id) {
               delete this.todos[index];
               this.todoLen--;
            }
        });
        this.loading = false;
    }

    @action resetTodo() {
        this.todos = [];
        this.todoLen = 0;
        this.loading = false;
    }

    @action getNow() {
        this.time = moment().format('YYYY-MM-DD HH:mm:ss');
        // 设置阻止实时刷新，否则会消耗CPU资源
        this.loading = false;
    }
}

const todoStore = new TodoStore()

setInterval(() => {
    todoStore.getNow()
})

export default todoStore;