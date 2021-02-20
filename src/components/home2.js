import React from 'react'
// import { connect } from '../utils/connect.js';
import { connect } from 'react-redux';
import { actions } from '../store/actionCreators';

const Home = (props) => {
  console.log('Home渲染了')
  
  const { counters, addFun } = props;
  
  return (
    <div style={{flex: 1}}>
      Home
      <br/>

      当前计数:{counters}

      <br/>

      <button onClick={addFun(1)}>+1</button>
      <br/>
      <button onClick={() => {addFun(5);}}>+5</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counters: state.counters
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addFun: num => {
      dispatch(actions(num));
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);

// connect('参数1','参数2') // 返回一个高阶组件
// connect('参数1','参数2')('组件')//所以传入Home这个组件再返回组件
