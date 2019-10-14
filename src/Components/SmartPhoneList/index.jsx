import React, { Component } from 'react'
import SmartPhoneItem from '../SmartPhoneItem'
const mangSanPham = [
    {
        maSP: 1,
        tenSP: 'IphoneX',
        moTa: 'iPhone X features a new all-screen design. Face ID, which makes your face your password',
        hinhAnh: '/img/sp_iphoneX.png',
    },

    {
        maSP: 2,
        tenSP: 'Galaxy Note7',
        moTa: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason',
        hinhAnh: '/img/sp_note7.png',
    },


    {
        maSP: 3,
        tenSP: 'Vivo',
        moTa: 'A young global smartphone brand focusing on introducing perfect sound quality',
        hinhAnh: '/img/sp_vivo850.png',
    },

    {
        maSP: 4,
        tenSP: 'Blackberry',
        moTa: 'BlackBerry is a line of smartphones, tablets, and services originally designed',
        hinhAnh: '/img/sp_blackberry.png',
    },
]
export default class SmartPhoneList extends Component {
    render() {
        const elm = mangSanPham.map((sanPham) => {
            return (
            <div className="col-md-3" key={sanPham.maSP}>  {/* bổ sung key để xác định cho từng sản phẩm*/}
                <SmartPhoneItem sanPham={sanPham}/>  {/*định nghĩa props là sản phẩm và gán sanPham từ mảng vào */}
            </div>
            )
        })
        return (
            <div>
                <h1>BEST SMARTPHONE</h1>
                <div className="container">
                    <div className="row">
                        {elm}
                    </div>
                </div>
            </div>
        )
    }
}
