import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { changeTabLevel, changeFooterSelect } from './../../reducer/actions/common.js';

import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  changeSelected(tab, title) {
    this.props.changeFooterSelect(tab,title);
  }

  back = () => {
    window.history.back(-1);
    this.props.changeTabLevel(1);
  }

  render() {
    let type = this.props.tabLevel;
    return (
      type === 1 ?
      (<header className="PublicHeader">
        <div className="searchIcon"><NavLink className="food_categorty_item text-white" to="/search" onClick={this.changeSelected.bind(this, 'search','搜索')}>搜索按钮</NavLink></div>
        <div className="searchBox">{this.props.guessCity.title ? this.props.guessCity.title : ''}</div>
        <div className="liginArea">登陆|注册</div>
      </header>) : 
      (<header className="PublicHeader">
        <div className="searchIcon" onClick={()=> this.back()}>返回按钮</div>
        <div className="title">{this.props.title}</div>
        <div className="liginArea">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      </header>)
    )
  }
}

const mapStateToProps = state => ({
  tabLevel: state.common.tabLevel,
  guessCity: state.common.guessCity
})

export default connect(mapStateToProps, { changeTabLevel, changeFooterSelect })(Header);