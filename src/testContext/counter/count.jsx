import React, { Component, createContext } from 'react';
const {
    Provider,
    Consumer: CountConsumer,
} = createContext()

class CountProvider extends Component {
    state = {
        count: 1
    }
    increment = () => {
        this.setState(state=>({
            count:state.count+1
        }))
    }
    decrement = () => {
        this.setState(state=>({
            count:state.count-1
        }))
    }
    render() {
        return (
            <Provider value={{
                count: this.state.count,
                increment: this.increment,
                decrement: this.decrement
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export {
    CountProvider,
    CountConsumer
};