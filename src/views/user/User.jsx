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
        <PublicHeader city={this.props.guessCity} />
        <div className="User"></div>
        <PublicFooter />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  guessCity: state.common.guessCity
})


export default connect(mapStateToProps, { })(User);
