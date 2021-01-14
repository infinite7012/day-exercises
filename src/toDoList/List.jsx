import React from 'react';
import PropTypes from "prop-types";
List.propTypes={
    list:PropTypes.array
}
export default function List(props) {
    return (
        <ul>
            {props.list.map(value=><li key={value.id}>{value.name}<span onClick={()=>props.onDelete(value.id)}> X </span></li>)}
        </ul>
    )
}

