import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { changeTabLevel, changeFooterSelect } from './../../reducer/actions/common.js';

import './Header.scss';

<<<<<<< HEAD
import backPng from './../../assets/img/back.png';

export default class Header extends Component {
=======
class Header extends Component {
>>>>>>> 05126dbf87381954547d8705c651f668567cd5b8
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
<<<<<<< HEAD
      (type === 'home' || type === 'search' || type === 'order' || type === 'user') ?
      (<header className="PublicHeader">
        {type === 'home' && <div className="searchIcon">
          <img src={''} alt="" />
        </div>}
        {type === 'home' ? <div className="searchBox">搜索输入框</div> : <div className="title">{this.props.title}</div>}
        {type === 'home' && <div className="liginArea">登陆|注册</div>}
=======
      type === 1 ?
      (<header className="PublicHeader">
        <div className="searchIcon"><NavLink className="food_categorty_item text-white" to="/search" onClick={this.changeSelected.bind(this, 'search','搜索')}>搜索按钮</NavLink></div>
        <div className="searchBox">{this.props.guessCity.title ? this.props.guessCity.title : ''}</div>
        <div className="liginArea">登陆|注册</div>
>>>>>>> 05126dbf87381954547d8705c651f668567cd5b8
      </header>) : 
      (<header className="PublicHeader">
        <div className="searchIcon" onClick={()=> this.props.back()}>
          <img src={backPng} alt="" />
        </div>
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