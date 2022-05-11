import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getGuessCity } from './../../reducer/actions/common.js';

import PublicHeader from './../../components/header/Header.jsx';
import PublicFooter from './../../components/footer/Footer.jsx';
import Loading from "./../../components/loading/Loading.jsx";

import './User.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      isLoading: true
    }

  }

  componentDidMount() {
    this.setState((prevState, props) => ({
        isLoading: !prevState.isLoading
      })
    )
  }

  render() {
    return (
      <div style={{width: this.state.width, height: this.state.height}}>
        <Loading isLoading={this.state.isLoading}></Loading>
<<<<<<< HEAD
        <PublicHeader city={this.props.guessCity} title={'我的'} type={'user'} />
        <div className="User"></div>
=======
        <PublicHeader city={this.props.guessCity} />
        <div className="User">
          <div className="UserTopBox bg-blue flex justify-between align-center text-white">
            <div className="basis-xl flex">
              <img src="" alt="" className="bg-white" />
              <div className="padding-left-xs text-left flex flex-direction align-center justify-center">
                <div className="flex-sub">921223971</div>
                <div className="text-sm flex-sub">暂未绑定手机号</div>
              </div>
            </div>
            <div className="basis-xs flex">
              <div>箭头</div>
            </div>
          </div>
          <div className="UserUenterBox bg-white flex justify-center align-center">
            <div className="flex-sub flex flex-direction">
              <div><span className="text-orange">0.00</span>元</div>
              <div>我的余额</div>
            </div>
            <div className="flex-sub flex flex-direction">
              <div><span className="text-red">0.00</span>个</div>
              <div>我的余额</div>
            </div>
            <div className="flex-sub flex flex-direction">
              <div><span className="text-green">0.00</span>元</div>
              <div>我的余额</div>
            </div>
          </div>
          <div className="UserUontent bg-white">
            <div className="text-lg fontWeight-lg text-left padding-sm">搜索历史</div>
            <div className="bg-white">
              <div className="text-lg text-left padding-sm flex align-center justify-between solid-bottom">
                <div className="flex align-center">
                  <div>炸鸡</div>
                  <div>炸鸡</div>
                </div>
                <div className="text-gray">箭头</div>
              </div>
              <div className="text-lg text-left padding-sm flex align-center justify-between solid-bottom">
              <div className="flex align-center">
                  <div>炸鸡</div>
                  <div>炸鸡</div>
                </div>
                <div className="text-gray">箭头</div>
              </div>
              <div className="text-lg fontWeight-lg text-blue padding-tb">清空搜索历史</div>
            </div>
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


export default connect(mapStateToProps, { })(User);
