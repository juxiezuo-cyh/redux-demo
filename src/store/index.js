//  定义store
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducer';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';

// 获取composeEnhancers函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

// saga中间件
const sagaMiddlewares = createSagaMiddleware();

// 应用中间件
// applyMiddleware('中间件1，中间件2，中间件3')
const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddlewares);

const store = createStore(reducers, composeEnhancers(storeEnhancer));

sagaMiddlewares.run(saga);// 跑起来,传入的是生成器函数

export default store;