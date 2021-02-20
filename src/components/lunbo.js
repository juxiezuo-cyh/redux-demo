import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeBannersAction, changeRecommendAction, getLunboMultidataAction } from '../store/actionCreators';

class Home extends Component {
  
  componentDidMount() {
    this.props.getLunboMultidata();
  }
  render() {
    return (
      <div>
        <h4>banners</h4>
        <ul>
          {
            this.props.banners.map(item => {
              return<li key={item.acm}>{item.title}</li> 
            }) 
          }
        </ul>
        <h4>recommends</h4>
        <ul>
          {
            this.props.recommends.map(item => {
              return<li key={item.acm}>{item.title}</li> 
            }) 
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  banners: state.banners,
  recommends: state.recommends
})

const mapDispatchToProps = dispatch => ({
  changeBanners(banners) {
    dispatch(changeBannersAction(banners));
  },
  changeRecommends(recommends) {
    dispatch(changeRecommendAction(recommends));
  },
  getLunboMultidata() {
    // dispatch(函数)
    dispatch(getLunboMultidataAction)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
