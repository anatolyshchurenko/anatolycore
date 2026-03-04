import React from "react";
import classes from './Navigations.module.css'

export default function DesInfo(props){
    return (
    <div className={classes.desInfo}>
        {props.InfoSpace}
    </div>)
}
