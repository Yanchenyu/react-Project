import React, {Component} from 'react'

class Hello extends Component {
    constructor(props){
        super(props)
    }
    static defaultProps = {
        title: 'Hello World!!qwdqwd'
    };
    componentDidMount(){}
    render(){
        return (
            <div>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

export default Hello;