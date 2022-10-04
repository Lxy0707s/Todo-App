import React,{Component} from "react";

class ClickCounter extends Component<any,any>{
    // 构造函数，初始化state,绑定成员函数this环境
    // this相当于当前组件的实例，可以通过this初始化state状态和绑定成员函数
    constructor(props: any) {
        super(props);
        this.onClickADD = this.onClickADD.bind(this);
        this.onClickSUB = this.onClickSUB.bind(this);
        this.updateCount = this.updateCount.bind(this);
        this.state = {
            count: props.initValue
        };
    }
    // 指定props类型及其默认值
    static defaultProps: { initValue: number };

    // 交互组件
    onClickADD(){
        /*let value = this.state.count + 1
        this.setState({count: value >= 0 ? value:0 });*/
        this.updateCount(true)
    }

    onClickSUB(){
        /*let value = this.state.count - 1
        this.setState({count: value >= 0 ? value:0 });*/
        this.updateCount(false)
    }

    updateCount(isIncrement:boolean){
        const previousValue = this.state.count;
        // 设置减的底线值
        const subValue = previousValue-1 >= 0? previousValue-1:0;
        // 根据点击的按钮判断增减
        const newValue = isIncrement? previousValue+1:subValue;
        // 更新对当前state值
        this.setState({count:newValue});
        // 通知父组件，交由父组件使用
        this.props.onUpdate (newValue, previousValue);
    }

    // 渲染，完全根据props和state来渲染内容并返回，不产生任何副作用
    render() {
        return (
            <div>
                <div>
                    {this.props.descript} :{'\u00A0\u00A0\u00A0'}
                    <button onClick={this.onClickADD}> + </button>
                    {'\u00A0\u00A0\u00A0'}
                    <button onClick={this.onClickSUB}> - </button>
                    {'\u00A0\u00A0\u00A0'}
                    调整值: {this.state.count}
                </div>
            </div>
        );
    }
}

ClickCounter.defaultProps = {
    initValue: 0
};

export default ClickCounter;