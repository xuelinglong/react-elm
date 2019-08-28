import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getGuessCity } from './../../reducer/actions/common.js';
import { NavLink } from 'react-router-dom';

import './FoodCategorty.css';

export default class FoodCategorty extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let index_entry = this.props.index_entry;
    return (
      <div className="FoodCategorty" >
        {
          index_entry && index_entry.map((item,index) => (
            <NavLink className="food_categorty_item" to={ `/foodCate?title=${item.title}&restaurant_category_id=${item.id}` } style={{display: (index < 8) ? 'block' : 'none' }} key={item.id}>
              <img className="cateImg" src={'https://fuss10.elemecdn.com' + item.image_url} alt="" />
              <p>{item.title}</p>
            </NavLink>
          ))
        }
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   index_entry: state.home.index_entry
// })


// export default connect(mapStateToProps, { })(FoodCategorty);
