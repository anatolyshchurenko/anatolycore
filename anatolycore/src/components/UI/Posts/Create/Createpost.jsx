import React from "react";
import classes from "./Createpost.module.css"

export default function Createpost() {
    return(
        <div>
            <button 
            type="submit"
            className={classes.CreateButton}
            >
                Создать пост
            </button>
        </div>
    )
}