import React, { Component } from 'react';

import './Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'topics'
    }
  }

  render() {
    return (
      <header className="PublicHeader">
        <div className="searchIcon">按钮</div>
        <div className="searchBox">搜索输入框</div>
        <div className="liginArea">登陆|注册</div>
      </header>
    )
  }
}