import React, { Component } from 'react'
import { connect } from "react-redux";
import { removeAction,loadDataAction } from "./store/actionCreators";

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}
const mapDispatchToProps = dispatch => {
    return {
        remove(index) {
            return dispatch(removeAction(index))
        },
        loadData() {
            return dispatch(loadDataAction())
        }
    }
}
@connect(mapStateToProps, mapDispatchToProps)
class List extends Component {
    handleRemove = (index) => {
        this.props.remove(index)
    }
    render() {
        return (
            <ul>
                {
                    this.props.list.map((value, index) => {
                        let {positionName,positionId}=value
                        return (
                            <li
                                key={positionId}
                            >{positionName}
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
    componentDidMount(){
        this.props.loadData()
    }
}
export default List
// export default connect(mapStateToProps)(List)