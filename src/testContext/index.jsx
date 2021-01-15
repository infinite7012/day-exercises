import React, { Component } from 'react';
import { testContext,Provider, Consumer } from "./testContext";
class ChildA extends Component {
    static contextType= testContext
    render() { 
        return ( 
            <div>ChildA:{this.context}</div>
         );
    }
}
 
class ChildB extends Component {
    render() { 
        return ( 
            <ChildC></ChildC>
         );
    }
}

const ChildC = (props)=>{
    return (
        <ChildD></ChildD>
    )
}
//函数只能用consumer的这种方式
const ChildD = ()=>{
    return (
        <div>ChildD
            <Consumer>
                {
                    (value)=> 
                    {
                        return <div>{value}</div>
                    }
                }
            </Consumer>
        </div>
    )
}

class App extends Component {
    render() { 
        return ( 
            <Provider value="hello">
                <ChildA></ChildA>
                <ChildB></ChildB>
            </Provider>
         );
    }
}
 
export default App;