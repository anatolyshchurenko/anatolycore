import React from "react";
import classes from "./UserName.module.css"
export default function UserName({...props}) {
    return(
        <div>
            <textarea 
                
                className={classes.user}
                maxlength="20" 
                placeholder="как тебя зовут?"
                {...props}
            ></textarea>
        </div>
    )
}