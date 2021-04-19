import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
//import { isAdmin } from "../../../../../server/routes/users"

function RightSection(props) {
    const user = useSelector(state => state.user)

    const logoutHandler = () => {
        axios.get(`${USER_SERVER}/logout`).then(response => {
            if (response.status === 200) {
                props.history.push("/login");
            } else {
                alert('Log Out Failed')
            }
        });
    };
    if (user.userData && !user.userData.isAuth) {
        return (
            <Menu mode={props.mode}>
                <Menu.Item key="register">
                    <a href="/register">Create Account</a>
                </Menu.Item>
                <span> | </span>
                <Menu.Item key="login">
                    <a href="/login">Login</a>
                </Menu.Item>
            </Menu>
        )
    } else {
        if (user.userData && user.userData.role == 1) {
            return (
                <Menu mode={props.mode}>
                    <span><b>Admin</b></span>
                    <Menu.Item key="upload">
                        <a href="/product/upload">Upload</a>
                    </Menu.Item>
                    <span> | </span>
                    <Menu.Item key="analytics">
                        <a href="/analytics">Analytics</a>
                    </Menu.Item>
                    <span> | </span>
                    <Menu.Item key="logout">
                        <a onClick={logoutHandler}>Logout</a>
                    </Menu.Item>
                    <span> | </span>
                    <Menu.Item key="cart">
                        <a href="/cart">Cart</a>
                    </Menu.Item>   
                </Menu>  
            )
        } else {
            return (
                <Menu mode={props.mode}>
                    <Menu.Item key="logout">
                        <a onClick={logoutHandler}>Logout</a>
                    </Menu.Item>
                    <span> | </span>
                    <Menu.Item key="cart">
                        <a href="/cart">Cart</a>
                    </Menu.Item>   
                </Menu>  
            )
        }
    }
}
export default withRouter(RightSection);