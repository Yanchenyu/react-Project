import React, {Component} from 'react'
import ChooseBrand from "../component/chooseBrand"
import TestModule1 from "../component/addNumber"
import TestModule2 from "../component/testModule"
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
        return (
            <div>
                <ChooseBrand changeChoice={this.changeChoice}></ChooseBrand>
                <div className={style.choiceList}>你的选择是：{this.state.radioValueArrString}</div>
                {/* 下面两个组件是兄弟组件，无嵌套关系，为了测试组件之间的通信 */}
                <TestModule1></TestModule1>
                <TestModule2></TestModule2>
            </div>
        )
    }
}
