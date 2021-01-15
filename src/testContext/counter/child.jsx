import React, { Component } from 'react';
import ChildHood from "./childHood";
import { CountConsumer } from "./count";
class Child extends Component {
    render() {
        return (
            <>
                <CountConsumer>
                    {
                        ({count})=><div>{count}</div>
                    }
                </CountConsumer>
                <ChildHood></ChildHood>
            </>
        );
    }
}

export default Child;