import React from 'react'
import ReactDom from 'react-dom'
//import App from "./toDoList/todoList";
// import App from "./testContext/index";
//import App from "./testContext/counter/App";
// import App from "./HOC/App";
import App from "./portal/App";
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
ReactDom.render(
  <App msg="world"/>,
  document.querySelector('#root')
)