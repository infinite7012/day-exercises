import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";

const Home = () => (<div>Home</div>)
const Topics = (props) => {
    let { url } = props.match
    return (
        <>
            <h1>Topics</h1>
            <hr></hr>
            <ul>
                <li>
                    <Link to={`${url}/Rendering`}>Rendering</Link>
                </li>
                <li>
                    <Link to={`${url}/Components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/PropsState`}>Props v. State</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${url}/Rendering`} exact component={Rendering}></Route>
                <Route path={`${url}/Components`} component={Components}></Route>
                <Route path={`${url}/PropsState`} component={PropsState}></Route>
            </Switch>
        </>
    )
}
const Rendering = () => (<div>Rendering</div>)
const Components = () => (<div>Components</div>)
const PropsState = () => (<div>PropsState</div>)
export default class App extends Component {
    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/topics'>Topics</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/topics' component={Topics}></Route>
                </Switch>
            </Router>
        )
    }
}
