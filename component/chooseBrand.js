import React, {Component,PropTypes} from 'react'

class ChooseBrand extends Component {
    static contextTypes = {
        color: PropTypes.string
    };
    constructor(props){
        super(props)
        this.state = {
            radioValueArr: []
        }
        this.handleClick=this.handleClick.bind(this)
    }
    static defaultProps = {
        title: '选择你喜欢的品牌'
    };
    handleClick(e){
        let radioValueArr = this.state.radioValueArr,
            val = e.target.value;
        if (radioValueArr.includes(val)) {
            radioValueArr.splice(radioValueArr.indexOf(val),1);
        } else {
            radioValueArr.push(e.target.value);
        }
        this.setState({
            radioValueArr
        });
        this.props.changeChoice(radioValueArr); // 给父组件通信
    }
    render(){
        return (
            <div>
                <p style={{textAlign: 'center',color: this.context.color}}>{this.props.title}</p>
                {/* 这里的includes是es7的方法，要注意babel的transform-runtime这个plugin有没有用 */}
                <input type="checkbox" value="LV" checked={this.state.radioValueArr.includes('LV')} onChange={this.handleClick} />LV
                <br/>
                <input type="checkbox" value="PRADA" checked={this.state.radioValueArr.includes('PRADA')} onChange={this.handleClick} />PRADA
                <br/>
                <input type="checkbox" value="CHANEL" checked={this.state.radioValueArr.includes('CHANEL')} onChange={this.handleClick} />CHANEL
                <br/>
                <input type="checkbox" value="GUCCI" checked={this.state.radioValueArr.includes('GUCCI')} onChange={this.handleClick} />GUCCI
                <br/>
                <input type="checkbox" value="FENDI" checked={this.state.radioValueArr.includes('FENDI')} onChange={this.handleClick} />FENDI
                <br/>
                <input type="checkbox" value="HERMES" checked={this.state.radioValueArr.includes('HERMES')} onChange={this.handleClick} />HERMES
                <br/>
            </div>
        )
    }
}

export default ChooseBrand;