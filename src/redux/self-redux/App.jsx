import React, { Component } from 'react'
import store from "./store";
export default class App extends Component {
    render() {
        return (
            <>
                <button onClick={()=>store.dispatch({type:'increment'})}>+</button>
                <span id='count'></span>
                <button onClick={()=>store.dispatch({type:'decrement'})}>-</button>
            </>
        )
    }
    componentDidMount(){
        store.dispatch()
    }
}
