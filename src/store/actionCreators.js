import axios from 'axios';
// 定义action 返回值是一个对象
import { FETCH_LUNBO_MULTIDASTAT, ADD_NUMBER, ADD_ONE, CHANGE_BANNERS, CHANGE_RECOMMEND } from "./constants"

export const actions = num => ({
  type: ADD_NUMBER,
  num
})

export const actions1 = () => ({
  type: ADD_ONE,
})

// 轮播图
export const changeBannersAction = banners => ({
  type: CHANGE_BANNERS,
  banners
})

export const changeRecommendAction = recommends => ({
  type: CHANGE_RECOMMEND,
  recommends
})

// 将网络请求放在redux中，位置是actions.js
// 返回值是一个函数
export const getLunboMultidataAction = (dispatch, getState) => {
  // getState 用来获取store里的数据
  console.log(getState())
  
  axios({
    url: "http://123.207.32.32:8000/home/multidata",
  }).then(res => {
    const data = res.data.data;

    dispatch(changeBannersAction(data.banner.list));
    dispatch(changeRecommendAction(data.recommend.list));
  })
}

export const fetchLunboMutidataAction = {
  type: FETCH_LUNBO_MULTIDASTAT
}