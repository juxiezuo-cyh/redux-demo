import React from 'react'
import {useEffect, useState} from 'react';
import { actions, actions1 } from '../store/actionCreators';
import store from '../store/index';

function About() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 订阅
    const unSubscribe = store.subscribe(() => {
      setCount(store.getState().counters);
    })

    return () => {
      unSubscribe();// 取消订阅
    }
  },[])

  return (
    <div style={{flex: 1}}>
      About
      <br/>

      当前计数:{count}

      <br/>

      <button onClick={() => {store.dispatch(actions1())}}>+1</button>
      <br/>
      <button onClick={() => {store.dispatch(actions(5))}}>+5</button>
    </div>
  )
}

export default About;
