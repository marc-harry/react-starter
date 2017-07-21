import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import * as counterActions from '../actions/counter';
import { Button } from 'reactstrap';

import Item from './item';

function mapStateToProps(state, props) {
    return {
        counter: state.counter
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(counterActions, dispatch)
    }
}
class CounterComponent extends Component {
    render() {
        return (
            <div>
                <Counter 
                    increase={this.props.actions.increaseCount}
                    decrease={this.props.actions.decreaseCount}
                    count={this.props.counter} />
                
                <div>
                    Nested Routes
                    <br/>
                    <span>
                        <Link to="/counter/subone">Sub Route One</Link>
                    </span> | 
                    <span>
                        <Link to="/counter/subtwo">Sub Route Two</Link>
                    </span>
                    <div>
                        <Route path="/counter/subone" component={() => <Item number={this.props.counter} />} />
                        <Route path="/counter/subtwo" component={() => <Item number={2} />} />
                    </div>
                </div>
            </div>
        );
    }
}

const counterProps = {
    decrease: Function, 
    increase: Function, 
    count: Number
}
const Counter = (props = counterProps) => (
    <div>            
        <Button color="primary" onClick={props.decrease}>Decrease</Button>
        &nbsp;
        <span>Counter: </span><span>{props.count}</span>
        &nbsp; 
        <Button color="primary" onClick={props.increase}>Increase</Button>
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);