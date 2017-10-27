import React, {Component} from 'react'
import eventEmitter from './eventEmitter'

class TestModule1 extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        eventEmitter.emit('addNumber');
    }
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>点我+1</button>
            </div>
        )
    }
}

export default TestModule1;