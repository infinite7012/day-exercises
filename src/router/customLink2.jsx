import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter
} from "react-router-dom";

const Home = () => (<div>Home</div>)
class About extends Component {
    render() {
        return <div>About</div>
    }
}
class Dashboard extends Component {
    render() {
        return <div>Dashboard</div>
    }
}
const Profile = () => (<div>Profile</div>)
@withRouter
class MyNavLink extends Component {
    state = {
        myList: [{
            id: '001',
            name: 'home'
        }, {
            id: '002',
            name: 'about'
        }, {
            id: '003',
            name: 'dashboard'
        }, {
            id: '004',
            name: 'profile'
        },
        ]
    }
    handleClick=(path)=>{
        this.props.history.push('/'+path)
    }
    render() {
        let pathname = this.props.location.pathname
        return (
            <>
                {
                    this.state.myList.map(value => {
                        let { id, name } = value
                        return (
                            <li
                                key={id}
                                onClick={()=>this.handleClick(name)}>
                            {pathname === '/' + name ? '>' : ''}{name}
                            </li>
                        )
                    })
                }
            </>
        )
    }
    componentDidMount() {
        console.log(this)
    }
}

export default class App extends Component {
    render() {
        return (
            <Router>
                <ul>
                    <MyNavLink></MyNavLink>
                </ul>
                <Switch>
                    <Route path='/about' render={(props) => <About {...props}></About>}></Route>
                    <Route path='/dashboard' children={(props) => <Dashboard {...props}></Dashboard>}></Route>
                    <Route path='/profile'>
                        <Profile></Profile>
                    </Route>
                    <Route path='/' component={Home}></Route>
                </Switch>
            </Router>
        )
    }
}
