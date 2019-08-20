import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGuessCity } from './../../reducer/actions/common.js';

class TakeOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      isLoading: true
    }

  }

  // componentDidMount() {
    
  //   this.setState((prevState, props) => ({
  //       isLoading: !prevState.isLoading
  //     })
  //   )
  // }

  render() {
    return (
      <div className="TakeOut">
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  guessCity: state.common.guessCity
})


export default connect(mapStateToProps, { getGuessCity })(TakeOut);
