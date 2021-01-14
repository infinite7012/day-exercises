import React, { Component } from 'react';
import Form from './Form'
import List from './List'

class todoList extends Component {
    state = {
        list: []
    }
    handleReceiveKeyWords = (keyWords) => {
        this.state.list.push({
            id: new Date().getTime(),
            name: keyWords
        })
        this.setState({})
    }
    handleDel = (id) => {
        let newList = this.state.list.filter(value => {
            return value.id !== id
        }
        )
        this.setState({
            list: newList
        })
    }
    render() {
        return (
            <>
                <Form
                    onReceiveKeyWords={this.handleReceiveKeyWords}>
                </Form>
                <List
                    onDelete={this.handleDel}
                    list={this.state.list}>
                </List>
            </>
        );
    }
}

export default todoList;