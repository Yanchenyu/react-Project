import React, {Component} from 'react'
import ChooseBrand from "../component/ChooseBrand"
import TestModule1 from "../component/AddNumber"
import TestModule2 from "../component/TestModule"
import {createNewHOCTest1, createNewHOCTest2} from '../component/HOCComponent'
import BaseComponent from '../component/BaseHOCComponent'
import style from '../css/chooseBrand.css'

export default class App extends Component {
    static childContextTypes = {
        color: React.PropTypes.string   // 必须要定义childContext的类型，不然会报错
    };
    constructor(props){
        super(props);
        this.state = {
            radioValueArrString: ''
        };
        this.changeChoice = this.changeChoice.bind(this);
    }
    changeChoice(arr){
        let radioValueArrString = arr.join(',');
        this.setState({
            radioValueArrString
        });
    }
    getChildContext(){
        return {
            color: '#00b9ff'
        }
    }
    render(){
        const newProps1 = {
            age: 16
        }
        const newProps2 = {
            name: 'XiaoHua'
        }
        const TestHOC1 = createNewHOCTest1(BaseComponent, newProps1);
        const TestHOC2 = createNewHOCTest2(BaseComponent, newProps2);
        return (
            <div>
                <ChooseBrand changeChoice={this.changeChoice}></ChooseBrand>
                <div className={style.choiceList}>你的选择是：{this.state.radioValueArrString}</div>
                {/* 下面两个组件是兄弟组件，无嵌套关系，为了测试组件之间的通信 */}
                <TestModule1></TestModule1>
                <TestModule2></TestModule2>
                <div>==============================================</div>
                {/* 高阶组件 */}
                <TestHOC1 />
                <TestHOC2 />
            </div>
        )
    }
}
