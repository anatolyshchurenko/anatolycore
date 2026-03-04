import React from "react";
import classes from './Navigations.module.css'

export default function Navigations({children}){
    return (
        <div>
            <nav className={classes.myDescription}>
            {children}
            </nav>
        </div>
        
    );
}


            
            
            