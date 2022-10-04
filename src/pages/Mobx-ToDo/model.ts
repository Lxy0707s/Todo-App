
export const ADD_TODO:string = 'TODO_ADD';
export const UPDATE_TODO:string = 'TODO_UPDATE';
export const REMOVE_TODO:string = 'TODO_REMOVE';
export const RESET_TODO:string = 'TODO_RESET';

export const SET_FILTER = 'FILTER/SET';

// 全局变量
export const FilterTypes = {
    ALL: '全部',
    COMPLETED: '已完成',
    UNCOMPLETED: '未完成'
}

export const setFilter = (filterType:string) => ({
    type: SET_FILTER,
    filter: filterType
});

export interface TodoModel {
    id?: number;
    key?: number;
    title?: string;
    completed: boolean;
    type: string;
    colorType?: string
}

export const setVisibleTodos = (filter:string, todos:TodoModel[]) => {
    switch (filter) {
        case FilterTypes.ALL:
            return todos.filter((item:TodoModel) => item.completed||!item.completed);
        case FilterTypes.COMPLETED:
            return todos.filter((item:TodoModel) => item.completed);
        case FilterTypes.UNCOMPLETED:
            return todos.filter((item:TodoModel) => !item.completed);
        default:
            return todos;
    }
}