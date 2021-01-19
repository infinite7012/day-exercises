import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";

const Home = () => (<div>Home</div>)
const About = () => (<div>About</div>)
const Dashboard = () => (<div>Dashboard</div>)

export default class App extends Component {
    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/Dashboard'>Dashboard</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/about' component={About}></Route>
                    <Route path='/dashboard' component={Dashboard}></Route>
                </Switch>
            </Router>
        )
    }
}
