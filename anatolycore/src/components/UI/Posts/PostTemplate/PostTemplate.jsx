import React from "react";
import classes from "./PostTemplate.module.css"
export default function PostTemplate(props) {
    return(
        <div>
            <div className={classes.date}>{props.Date}</div>
            <div className={classes.template}>
                <div className={classes.user}>{props.UserName}
                    <div className={classes.time}>{props.Time}</div>
                    :</div>
                <div className={classes.text}>{props.PostText}</div>
            </div>
        </div>
        
    )
}