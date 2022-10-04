import React from 'react';
import {ToDoView as Todos} from './ToDos';
import {FilterView as Filter} from './Filter';

function TodoApp() {
    return (
        <div>
            <Todos />
            <Filter />
        </div>
    );
}

export default TodoApp;
