import React, { Component } from 'react'

class BaseHOCComponent extends Component {
    static props = {
        name: 'LiLei',
        age: 12
    }
    render(){
        const props = this.props;
        return (
            <div>
                <div>{props.name}</div>
                <div>{props.age}</div>
            </div>
        )
    }
}

export default BaseHOCComponent;
