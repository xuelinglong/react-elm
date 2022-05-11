import React, { Component } from 'react';

import './Header.scss';

import backPng from './../../assets/img/back.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  back = () => {
    this.props.history.goBack();
  }

  render() {
    let type = this.props.type;
    return (
      (type === 'home' || type === 'search' || type === 'order' || type === 'user') ?
      (<header className="PublicHeader">
        {type === 'home' && <div className="searchIcon">
          <img src={''} alt="" />
        </div>}
        {type === 'home' ? <div className="searchBox">搜索输入框</div> : <div className="title">{this.props.title}</div>}
        {type === 'home' && <div className="liginArea">登陆|注册</div>}
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