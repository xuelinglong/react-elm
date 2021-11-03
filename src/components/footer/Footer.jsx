import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { changeFooterSelect } from './../../reducer/actions/common.js';

import './Footer.scss';

import elmPng from './../../assets/img/elm.png';
import zhinanzhenPng from './../../assets/img/zhinanzhen.png';
import orderPng from './../../assets/img/order.png';
import userPng from './../../assets/img/user.png';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'topics'
    }
  }

  changeSelected(tab, title) {
    this.props.changeFooterSelect(tab,title);
  }

  render() {
    return (
      <footer className="PublicFooter solid-top">
        <ul className="footer_bar">
          <NavLink className="footer_bar_item" to="/">
            <li className={ this.props.active === 'elm' ? 'active': ''} onClick={this.changeSelected.bind(this, 'elm','elm')}>
              <img src={elmPng} alt="" />
              <p>外卖</p>
            </li>
          </NavLink>
          <NavLink className="footer_bar_item" to="/search" onClick={this.changeSelected.bind(this, 'search','搜索')}>
            <li className={ this.props.active === 'search' ? 'active': ''}>
              <img src={zhinanzhenPng} alt=""/>
              <p>搜索</p>
            </li>
          </NavLink>
          <NavLink className="footer_bar_item" to="/order" onClick={this.changeSelected.bind(this, 'order','订单')}>
            <li className={ this.props.active === 'order' ? 'active': ''}>
              <img src={orderPng} alt=""/>
              <p>订单</p>
            </li>
          </NavLink>
          <NavLink className="footer_bar_item" to="/user" onClick={this.changeSelected.bind(this, 'user','我的')}>
            <li className={ this.props.active === 'user' ? 'active': ''}>
              <img src={userPng} alt=""/>
              <p>我的</p>
            </li>
          </NavLink>
        </ul>
      </footer>
    )
  }
}

const mapStateToProps = state => ({
  active: state.common.activeFooter
})

export default connect(mapStateToProps, { changeFooterSelect })(Footer);