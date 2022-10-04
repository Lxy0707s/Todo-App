import React,{Component} from "react";
import ClickCounter from "./ClickCounter";

class CounterPanel extends Component<any, any>{
    private initValues: number[];
    constructor(props:any) {
        super(props);
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.initValues = [0,5,10]
        const initSum = this.initValues.reduce((a :number,b :number) => a+b,0)
        this.state = {
            sum: initSum
        };
    }
    onCounterUpdate(newValue: number, previousValue: number) {
        const valueChange = newValue - previousValue;
        this.setState({sum: this.state.sum + valueChange})
    }
    render() {
        return (
            // <div>
            //     <ClickCounter descript= "组件1" initValue = {1}></ClickCounter>
            //     <ClickCounter descript= "组件2" initValue = {5}></ClickCounter>
            // </div>
            <div>
                <ClickCounter onUpdate = {this.onCounterUpdate} descript= "数字1" />
                <ClickCounter onUpdate = {this.onCounterUpdate} descript= "数字2" initValue = {this.initValues[1]} />
                <ClickCounter onUpdate = {this.onCounterUpdate} descript= "数字3" initValue = {this.initValues[2]} />
                <div> 求和: {this.state.sum}</div>
            </div>
        );
    }
}
export default CounterPanel;