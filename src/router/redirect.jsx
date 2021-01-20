import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
    Redirect
} from "react-router-dom";

const Home = () => (<div>Home</div>)
const About = () => (<div>About</div>)

export default class App extends Component {
    render() {
        return (
            <Router>
                <NavLink to='/home'>Home</NavLink> | &nbsp;
                <NavLink to='/about'>About</NavLink>
                <Switch>
                    <Route path='/home' exact component={Home}></Route>
                    <Route path='/about' component={About}></Route>
                    <Redirect from='/' to='/home'></Redirect>
                </Switch>
            </Router>
        )
    }
}
