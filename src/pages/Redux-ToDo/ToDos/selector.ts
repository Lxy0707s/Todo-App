import {createSelector} from "reselect";
import {FilterTypes} from "../constants";

const getFilter = (state:any) => state.filter;
const getTodos = (state:any) => state.todos;

export const selectVisibleTodos = createSelector(
    [getFilter, getTodos],
    (filter, todos) => {
        switch (filter) {
            case FilterTypes.ALL:
                return todos;
            case FilterTypes.COMPLETED:
                return todos.filter((item:any) => item.completed);
            case FilterTypes.UNCOMPLETED:
                return todos.filter((item:any) => !item.completed);
            default:
                throw new Error('unsupported filter');
        }
    }
);