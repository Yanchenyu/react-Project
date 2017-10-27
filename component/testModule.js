import React, {Component} from 'react'
import eventEmitter from './eventEmitter'

class TestModule2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
    }
    componentDidMount(){
        eventEmitter.on('addNumber', () => {
            let number = this.state.number+1;
            this.setState({
                number
            })
        })
    }
    componentWillUnMount(){
        emitter.removeListener('addNumber')
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
            </div>
        )
    }
}

export default TestModule2;