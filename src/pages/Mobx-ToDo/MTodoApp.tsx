import {lazy} from "react";

const TodoTable = lazy(() =>
    import('@/pages/Mobx-ToDo/MToDo/TodoView')
)

export default TodoTable;