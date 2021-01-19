import React, { Component } from 'react'
import { connect } from "react-redux";
import {putAction} from './store/actionCreators'

const mapDispatchToProps = dispatch => {
    return {
        putData(task) {
            return dispatch(putAction)
        }
    }
}
@connect(null,mapDispatchToProps)
class Form extends Component {
    state = {
        task: ''
    }
    handleChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }
    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.props.putData(this.state.task)
            this.setState({
                task:''
            })
        }
    }
    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.state.task}
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp} />
            </div>
        )
    }
}
export default Form
