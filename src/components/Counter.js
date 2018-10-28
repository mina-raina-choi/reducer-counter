import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';


// 오직 props로 셋팅!
const Counter = ({ number, color, index, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div
            className="Counter"
            onClick={()=> onIncrement(index)}
            // 우클릭 메뉴 열리는 이벤트 => e.preventDefault()로 메뉴열리지않게
            onContextMenu={
                (e) => {
                    e.preventDefault();
                    onDecrement(index);
                }
            }
            onDoubleClick={()=>onSetColor(index)}
            style={{backgroundColor: color}}
            >
            {number}
        </div>
    )
}

Counter.propTypes = {
    idnex: PropTypes.number,
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

Counter.defaultProps = {
    idnex: 0,
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};


export default Counter;