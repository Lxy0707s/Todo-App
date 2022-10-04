import { legacy_createStore as createStore} from 'redux'
import {reducer} from "../Reducer";


const initValue ={
    'First': 0,
    'Second': 5,
    'Third': 10
}

const store = createStore(reducer, initValue);

export default store;

