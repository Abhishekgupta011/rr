import React from "react";
import classes from './Header.module.css';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store/Index";
const Header = () =>{
    const dispatch = useDispatch();
    const isAuth = useSelector((state)=>state.Auth.isAuthenticated)
    const logoutHandler = ()=>{
        dispatch(authActions.logout())
    }
    return(
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {isAuth && <nav>
            <ul>
                
                <li>My Products</li>
                <li>My Sale</li>
                <li>
                    <button onClick={logoutHandler}>Logout</button>
                </li>
            </ul>
            </nav>}
        </header>
    )
}
export default Header;