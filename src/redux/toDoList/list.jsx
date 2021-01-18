import React, { Component } from 'react'
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}
const mapDispatchToProps = dispatch => {
    return {
        remove(index) {
            return dispatch({
                type: 'REMOVE_DATA',
                index
            }
            )
        }
    }
}
@connect(mapStateToProps, mapDispatchToProps)
class List extends Component {
    handleRemove = (index) => {
        console.log(index)
        this.props.remove(index)
    }
    render() {
        return (
            <ul>
                {
                    this.props.list.map((value, index) => {
                        return (
                            <li
                                key={index}
                            >{value}
                                <button
                                    onClick={() => this.handleRemove(index)}
                                >remove</button>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default List
// export default connect(mapStateToProps)(List)