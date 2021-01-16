import React, { Component } from 'react'
import dispatch from "./store";
export default class App extends Component {
    render() {
        return (
            <>
                <button onClick={()=>dispatch({type:'increment'})}>+</button>
                <span id='count'></span>
                <button onClick={()=>dispatch({type:'decrement'})}>-</button>
            </>
        )
    }
    componentDidMount(){
        dispatch()
    }
}
