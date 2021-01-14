import React, { Component } from 'react';
class Form extends Component {
    state = { 
        value:''
     }
    handleChange=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    handleSubmit=(e)=>{
        if(e.keyCode===13){
            this.props.onReceiveKeyWords(this.state.value)
            this.setState({
                value:''
            })
        }
    }
    render() { 
        return ( 
            <input 
                type="text" 
                value={this.state.value} 
                onChange={this.handleChange}
                onKeyUp={this.handleSubmit}
            />
         );
    }
}
 
export default Form;