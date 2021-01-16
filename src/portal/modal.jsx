import React, { Component } from 'react'
import withPortal from "./withPortal";
@withPortal
class Modal extends Component {
    render() {
        return (
            <div>
                <h1>Portal Header</h1>
                <button>add</button>
            </div>
        )
    }
}
export default Modal
