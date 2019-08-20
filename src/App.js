import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

// import { GetData } from './reducer/fetch.js';

import Main from './router';

// import { fetch } from './../scripts/fetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  }
  // componentWillMount() {
  //   GetData('cities?type=guess')
  //   .then(data => console.log(data))
  //   .catch(error => console.error(error))
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="App" style={{width: this.state.width, height: this.state.height}}>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
