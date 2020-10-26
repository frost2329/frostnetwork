import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarConteiner}>
                <div className={classes.item}>
                    <NavLink to="/Profile" activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/Dialogs" activeClassName={classes.active}>Messenger</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/Friends" activeClassName={classes.active}>Friends</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/News" activeClassName={classes.active}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/Music" activeClassName={classes.active}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/Games" activeClassName={classes.active}>Games</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/Settings" activeClassName={classes.active}>Settings</NavLink>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;