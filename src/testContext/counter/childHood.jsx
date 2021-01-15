import React, { Component } from 'react';
import { CountConsumer } from "./count";

class ChildHood extends Component {
    render() {
        return (
            <CountConsumer>
                {
                    ({ count, increment, decrement }) => {
                        return (
                            <>
                                <div>{count}</div>
                                <button onClick={increment}>+</button>
                                <button onClick={decrement}>-</button>
                            </>
                        )
                    }
                }
            </CountConsumer>
        );
    }
}

export default ChildHood;