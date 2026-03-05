import React from "react";
import classes from "./OtherComp.module.css"

export default function AuthorInfo(){
    return(
        <div>
            <p className={classes.mr_chronica}>mr. chronica</p>
            <a className={classes.otherHref} href="https://t.me/anatoly_shchurenko" target="_blank" rel="noreferrer">
                <b>telegram</b>
            </a>
                
            <a className={classes.otherHref} href="https://soundcloud.com/anatolyshchurenko" target="_blank" rel="noreferrer">
                <b>soundcloud</b>
            </a>
                
            <a className={classes.otherHref} href="https://discord.gg/uUfEdK9wmH" target="_blank" rel="noreferrer">
                <b>discord</b>
            </a>
                
            <a className={classes.otherHref} href="https://github.com/anatolyshchurenko" target="_blank" rel="noreferrer">
                <b>github</b>
            </a>
        </div>
    );
}