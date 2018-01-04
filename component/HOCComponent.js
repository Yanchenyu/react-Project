import React, { Component } from 'react'

export function createNewHOCTest1(WrapComponent, addProps) {
    return class hocComponent extends Component {
        componentDidMount(){
            console.log('this is didMount')
        }
        render(){
            const {name, ...props} = this.props;
            return (
                <WrapComponent {...props} {...addProps} />
            )
        }
    }
}

export function createNewHOCTest2(WrapComponent, addProps) {
    return class hocComponent extends Component {
        componentWillMount(){
            console.log('this is willMount')
        }
        render(){
            const {age, ...props} = this.props;
            return (
                <WrapComponent {...props} {...addProps} />
            )
        }
    }
}

// 高阶工厂函数
