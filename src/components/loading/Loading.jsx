import React, { Component } from 'react';
import './Loading.scss';

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      isLoading: true,
    }

  }

  render() {
    const isLoading = this.props.isLoading;
    return (
      isLoading && <div className="loadingText" style={{width: this.state.width, height: this.state.height, lineHeight: this.state.height + 'px'}}>加载中。。。</div>
    )
  }
}