import {reducer as todoReducer} from './ToDos';
import {reducer as filterReducer} from './Filter';
const {combineReducers, createStore} = require('redux');

// 辅助函数的作用是,把一个由多个不同reducer函数作为value的object,合并成一个最终的reducer函数,
// 然后就可以对这个 reducer 调用 createStore 对外暴露
const reducers = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

export default createStore(reducers);
