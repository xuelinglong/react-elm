import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGuessCity } from './../../reducer/actions/common.js';
import { getIndexEntry, getMerchantList } from './../../reducer/actions/home.js';

import PublicHeader from './../../components/header/Header.jsx';
import PublicFooter from './../../components/footer/Footer.jsx';
import Loading from "./../../components/loading/Loading.jsx";
import FoodCategorty from './foodCategorty/FoodCategorty.jsx';
import MerchantList from './../../components/merchant/Merchant';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      isLoading: true
    }

  }

  componentDidMount() {

    this.props.getGuessCity();
    this.props.getIndexEntry();

    let params = {
      latitude: '31.22299',
      longitude: '121.4762'
    }
    this.props.getMerchantList(params);
    
    this.setState((prevState, props) => ({
        isLoading: !prevState.isLoading
      })
    )
  }

  render() {
    return (
      <div style={{width: this.state.width, height: this.state.height}}>
        <Loading isLoading={this.state.isLoading}></Loading>
        <PublicHeader city={this.props.guessCity} />
        <div className="Home">
          <FoodCategorty index_entry={this.props.index_entry}></FoodCategorty>
          <MerchantList merchant_list={this.props.merchant_list}></MerchantList>
        </div>
        <PublicFooter />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  guessCity: state.common.guessCity,
  index_entry: state.home.index_entry,
  merchant_list: state.home.merchant_list
})


export default connect(mapStateToProps, { getGuessCity, getIndexEntry, getMerchantList })(Home);