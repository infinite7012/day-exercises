import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";

class Child extends Component{
    render(){
        return(
            <div>{this.props.match.params.id}</div>
        )
    }
    componentDidMount(){
        console.log(this)
    }

}
export default class App extends Component {
    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path='/:id' component={Child}></Route>
                </Switch>
            </Router>
        )
    }
}
