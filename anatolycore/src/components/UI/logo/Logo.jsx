import React from "react";
import classes from './Logo.module.css'
const Logo = ({children}) => {
    return (
        <div className={classes.myLogo}>
            {children}
        </div>
    );
}
export default Logo