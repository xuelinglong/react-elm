import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getGuessCity } from './../../reducer/actions/common.js';
import { GetQueryString } from "./../../assets/js/commonFunction.js";
import { getMerchantList } from './../../reducer/actions/home.js';

import PublicHeader from './../../components/header/Header.jsx';
import Loading from "./../../components/loading/Loading.jsx";
import MerchantList from './../../components/merchant/Merchant';

import './FoodCate.css';

class FoodCate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      isLoading: true,
      title: ''
    }

  }

  componentDidMount() {
    let title = GetQueryString('title');
    let id = GetQueryString('restaurant_category_id');

    let params = {
      latitude: '31.22299',
      longitude: '121.4762',
      restaurant_category_id: id
    }
    this.props.getMerchantList(params);

    this.setState((prevState, props) => ({
        isLoading: !prevState.isLoading,
        title: title
      })
    )
  }

  render() {
    return (
      <div style={{width: this.state.width, height: this.state.height}}>
        <Loading isLoading={this.state.isLoading}></Loading>
        <PublicHeader city={this.props.guessCity} type='food' title={this.state.title} />
        <div className="FoodCate">
          <MerchantList merchant_list={this.props.merchant_list}></MerchantList>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  merchant_list: state.home.merchant_list
})


export default connect(mapStateToProps, { getMerchantList })(FoodCate);
