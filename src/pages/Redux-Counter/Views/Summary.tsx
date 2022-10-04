import store from "../Store/CounterStore";
import {Component} from "react";

class Summary extends Component<any, any> {
    constructor(props:any) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = this.getOwnState();
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    getOwnState() {
        const state = store.getState();
        let sum = 0;
        for (const key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key];
            }
        }

        return { sum: sum };
    }

    shouldComponentUpdate(nextProps:any, nextState:any) {
        return nextState.sum !== this.state.sum;
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.subscribe(this.onChange);
    }

    render() {
        const sum = this.state.sum;
        return (
            <div>Total Count: {sum}</div>
        );
    }
}

export default Summary;