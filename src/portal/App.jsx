import React, { Component } from 'react'
import Modal from "./modal";

export default class App extends Component {
    handleClick=()=>{
        console.log(0)
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                <Modal></Modal>
            </div>
        )
    }
}
