import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { changeTabLevel } from './../../../reducer/actions/common.js';

import './FoodCategorty.css';

class FoodCategorty extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  changeingTabLevel(tabLevel) {
    this.props.changeTabLevel(tabLevel);
    console.log(this.props.tabLevel);
  }

  render() {
    let index_entry = this.props.index_entry;
    return (
      <div className="FoodCategorty bg-white" >
        {
          index_entry && index_entry.map((item,index) => (
            <NavLink className="food_categorty_item" to={ `/foodCate?title=${item.title}&restaurant_category_id=${item.id}` } onClick={this.changeingTabLevel.bind(this, 2)} style={{display: (index < 8) ? 'block' : 'none' }} key={item.id}>
              <img className="cateImg" src={'https://fuss10.elemecdn.com' + item.image_url} alt="" />
              <p>{item.title}</p>
            </NavLink>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tabLevel: state.common.tabLevel
})


export default connect(mapStateToProps, { changeTabLevel })(FoodCategorty);
