import React, { Component } from 'react';

import CounterListContainer from './CounterListContainer';
import Buttons from '../components/Buttons';

import * as actions from '../actions';
import {connect} from 'react-redux'; 
import  getRandomColor  from '../lib';

class App extends Component {
    render() {
        const { onCreate, onRemove} = this.props;
        return (
            <div>
                <Buttons
                    onCreate={onCreate}
                    onRemove={onRemove}
                />
                <CounterListContainer/>
            </div>
        )
    }
}

const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: () => dispatch(actions.remove())
})

export default connect(null, mapToDispatch)(App);