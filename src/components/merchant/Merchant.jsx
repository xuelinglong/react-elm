import React, { Component } from 'react';

import './Merchant.css';

export default class Merchant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    let list = this.props.merchant_list;
    return (
      <div>
        <ul className="merchantList_ul bg-white">
          {
            list && list.map((item, index) => (
              <li className="merchantList_li" key={item.id}>
                <section className="merchant_li_section">
                  <img className="merchantImg" src={'https://elm.cangdu.org/img/' + item.image_path} alt=""/>
                </section>
                <hgroup>
                  <header className="flex justify-between align-center">
                    <p className="merchant_title flex-sub text-left text-cut">{item.name}</p>
                    <div className="merchant_title_right flex">
                      <span>保</span>
                      <span>准</span>
                      <span>票</span>
                    </div>
                  </header>
                  <div className="star_line">
                    <section className="star_left flex-sub">
                      <div className="star_box">
                        <section>星星</section>
                        <span> {item.rating} </span>
                      </div>
                      <span>月售{item.recent_order_num}单</span>
                    </section>
                    <section>
                      <span>蜂鸟专送</span>
                      <span>准时达</span>
                    </section>
                  </div>
                  <div className="fee_line">
                    <p className="fee">
                      <span>&yen;{item.float_minimum_order_amount}起送 </span>
                      <span>/</span>
                      <span> {item.piecewise_agent_fee.tips}</span>
                    </p>
                    <p className="time">
                      <span>{item.distance} </span>
                      <span>/</span>
                      <span> {item.order_lead_time}</span>
                    </p>
                  </div>
                </hgroup>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}