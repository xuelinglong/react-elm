import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getGuessCity } from './../../reducer/actions/common.js';

import PublicHeader from './../../components/header/Header.jsx';
import PublicFooter from './../../components/footer/Footer.jsx';
import Loading from "./../../components/loading/Loading.jsx";

import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      isLoading: true,
      keywords: ''
    }

  }

  componentDidMount() {
    this.setState((prevState, props) => ({
        isLoading: !prevState.isLoading
      })
    )
  }

  inputChange(e) {
    let val = e.target.value;
    this.setState({
      keywords: val
    });
  }

  render() {
    return (
      <div style={{width: this.state.width, height: this.state.height}}>
        <Loading isLoading={this.state.isLoading}></Loading>
<<<<<<< HEAD
        <PublicHeader city={this.props.guessCity} title={'搜索'} type={'search'} />
        <div className="Search"></div>
=======
        <PublicHeader city={this.props.guessCity} />
          <div className="Search bg-white flex justify-between align-center">
            <div className="basis-xl flex margin-right-xs">
              <input ref="keywords" type="text" placeholder="请输入商家或美食名城" confirm-type="search" onChange={this.inputChange.bind(this)}></input>
            </div>
            <div className="basis-xs flex">
              <button class="bg-blue">搜索</button>
            </div>
          </div>
          <div className="SearchContent">
            <div className="text-lg fontWeight-lg text-left padding-sm">搜索历史</div>
            <div className="bg-white">
              <div className="text-lg text-left padding-sm flex align-center justify-between solid-bottom">
                <div>炸鸡</div>
                <div className="text-gray">删除</div>
              </div>
              <div className="text-lg text-left padding-sm flex align-center justify-between solid-bottom">
                <div>奶茶</div>
                <div className="text-gray">删除</div>
              </div>
              <div className="text-lg fontWeight-lg text-blue padding-tb">清空搜索历史</div>
            </div>
          </div>
>>>>>>> 05126dbf87381954547d8705c651f668567cd5b8
        <PublicFooter />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  guessCity: state.common.guessCity
})


export default connect(mapStateToProps, { })(Search);
