import React from 'react'
import './Header1.css'
import {BsPerson} from 'react-icons/bs'
function Header1() {
    return (
        <div>
            <div className="sidebar-control">
            <div className="header">
                    <h1>ຮ້ານອາເຝີຍ</h1>
                    <div className="login">
                        <BsPerson/>
                    </div> 
                </div>
            <div className="sidebar">
                <ul>
                    <li><a href="">Customer</a></li>
                    <li><a href="">Transaction</a> </li>
                    <li><a href="">Reports</a></li>
                    <li><a href="">Setting</a></li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Header1
