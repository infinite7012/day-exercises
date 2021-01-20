// 三种传参方式
import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
    NavLink,
    useLocation,
    useParams
} from 'react-router-dom'
const Home = () => {
    let {state:{id}}=useLocation()
    return (
        <div>Home:{id}</div>
    )
}
const About = () => {
    let {id}=useParams()
    return (
        <div>About:{id}</div>
    )
}
const Search = () => {
    let {search}=useLocation()
    let query=new URLSearchParams(search)
    return (
        <div>Search:{query.get('id')}</div>
    )
}

const Page404 = () => {
    return (
        <div>page404</div>
    )
}
const Params = () => {
    return (
        <>
            <Router>
                <ul>
                    <li>
                        <NavLink to={{pathname:'/home',state:{id:11}}}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about/12'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/search?id=13'>Search</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path='/home'>
                        <Home></Home>
                    </Route>
                    <Route path='/about/:id'>
                        <About></About>
                    </Route>
                    <Route path='/search'>
                        <Search></Search>
                    </Route>
                    <Redirect exact from='/' to={{pathname:'/home',state:{id:11}}}></Redirect>
                    <Route path='*'>
                        <Page404></Page404>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
export default Params