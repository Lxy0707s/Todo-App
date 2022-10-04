import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {Provider} from "mobx-react";
import todoStore from "@/pages/Mobx-ToDo/todoStore";
import MTodoApp from "@/pages/Mobx-ToDo/MTodoApp";
// import {Provider} from 'react-redux';
// import store from "./components/Redux-ToDo/store";
// import TodoApp from "./components/Redux-ToDo/ToDoApp";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={todoStore}>
          <MTodoApp />
      </Provider>
      {/*<Provider store={store}>*/}
      {/*    <TodoApp />*/}
      {/*</Provider>,*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
