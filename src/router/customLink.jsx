import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from "react-router-dom";
import  "./style.css";

const Home = () => (<div>Home</div>)
class About extends Component{
    render(){
        return <div>About</div>
    }
    componentDidMount(){
        console.log(this.props)
    }
}
class Dashboard extends Component{
    render(){
        return <div>Dashboard</div>
    }
}
const Profile = () => (<div>Profile</div>)

export default class App extends Component {
    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <NavLink activeClassName="selected" exact to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to='/dashboard'>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to='/profile'>Profile</NavLink>
                    </li>
                </ul>
                {/* 四种加载组件的方法：
                    1.component后面必须加一个组件，可以跟函数组件或类组件；
                    2.render后面一定是跟一个函数，render渲染属性
                    3.children的语法和render是一样的，他后面也是跟一个函数，函数体里面可以返回一个组件；
                    render和children的区别：
                        render只有在路径匹配的时候渲染组件，而children不管路径匹不匹配都渲染(把Switch去掉)
                    4.在Route里直接加上组件
                 */}
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/about' render={(props)=><About {...props}></About>}></Route>
                    <Route path='/dashboard' children={(props)=><Dashboard {...props}></Dashboard>}></Route>
                    <Route path='/profile'>
                        <Profile></Profile>
                    </Route>
                </Switch>
            </Router>
        )
    }
}
