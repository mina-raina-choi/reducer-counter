import Counter from '../components/Counter';
import * as actions from '../actions';
// 컨테이너 컴포넌트를 store에 연결시켜주려면...connect함수 사용..
// connect 함수의 파라미터로 컴포넌트에 연결시킬 상태와, 액션함수를 전달 
// =>컴포넌트를 리덕스 스토어에 연결시키는 또다른 함수를 리턴
//  => 리턴된 함수안에 프레젠테이셔널 컴포넌트를 파라미터로 전달해주면, 
// ==> 리덕스스토어에 연결된 컴포넌트가 새로 만들어짐..
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
})




/* 
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor(); // 임시
        dispatch(actions.setColor(color));
    }
});

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.


// ㅇㅣ렇게 하면... mapStateToprops의 color, number
// mapDispatchToProps의 onIncrement, onDecrement, onSetColor가
// Counter 컴포넌트의 props로 셋팅...
const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);


export default CounterContainer;