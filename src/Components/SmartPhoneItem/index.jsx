import React, { Component } from 'react'

export default class SmartPhoneItem extends Component {
    render() {
        // console.log(this.props.sanPham);
        const { sanPham } = this.props;
        return (
            <div>
                <div className="card text-white bg-dark">
                  <img className="card-img-top" src={sanPham.hinhAnh} alt="" />
                  <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.moTa}</p>
                  </div>
                </div>
            </div>
        )
    }
}
