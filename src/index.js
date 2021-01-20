import React from 'react'
import ReactDom from 'react-dom'
//import App from "./toDoList/todoList";
// import App from "./testContext/index";
//import App from "./testContext/counter/App";
// import App from "./HOC/App";
// import App from "./portal/App";
// import App from "./redux/self-redux/App";
// import App from "./redux/react-redux/App";
// import store from "./redux/react-redux/store";
// import App from "./redux/toDoList/todoList";
// import { Provider } from "react-redux";
// import store from "./redux/toDoList/store";
// import App from './router/App'
// import App from './router/UrlParameter'
// import App from './router/nesting'
// import App from './router/customLink'
// import App from './router/customLink2'
// import App from './router/redirect'
// import App from "./router/redirects";
import App from "./router/params.jsx";
//函数式组件
// const App=(props)=>{
//   const person = {name:'justin'}
//   Object.defineProperty(person,'age',{
//     value:12,
//     enumerable:true
//   })
//   return <div>{Object.values(person)}</div>
// }
//类组件
// class App extends React.Component{ 
//   render(){
//     return (
//       <div>hello{this.props.title}</div>
//     )
//   }
// }

//react元素    react 组件
//元素 camel-case  组件 pascal-case
// function render(){
  ReactDom.render(
    // <App msg="world"/>,
    // <Provider store={store}>
    //   <App/>
    // </Provider>,
    <App />,
    document.querySelector('#root')
  )
// }
// store.subscribe(render)
// render()
