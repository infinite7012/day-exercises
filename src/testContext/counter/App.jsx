import React, { Component } from 'react';
import Child from "./child";
import { CountProvider} from "./count";
class App extends Component {
    render() { 
        return ( 
            <CountProvider>
                <Child></Child>
            </CountProvider>
         );
    }
}
 
export default App;