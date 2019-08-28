import React, { Component } from 'react';

import './Header.scss';

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
      type === 'home' ?
      (<header className="PublicHeader">
        <div className="searchIcon">按钮</div>
        <div className="searchBox">搜索输入框</div>
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