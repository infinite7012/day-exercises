import React, { Component } from 'react';
import {createPortal} from 'react-dom'
function withPortal(Comp) {
    return class extends Component{
        render(){
            return createPortal(
                <Comp {...this.props}></Comp>,
                document.querySelector('body')
            )
        }
    }
}
export default withPortal