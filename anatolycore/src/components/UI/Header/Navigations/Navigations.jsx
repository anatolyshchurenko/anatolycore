import React from "react";
import classes from './Navigations.module.css'

export default function Navigations({children, ...props}){
    return (
        <div >
            <nav {...props} className={classes.myDescription}>
            {children}
            </nav>
        </div>
        
    );
}


            
            
            