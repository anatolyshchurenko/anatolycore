import React from "react";
import classes from "./Holder.module.css"
export default function Holder({...props}) {
    return(
        <div>
            <textarea 
                
                className={classes.newPost}
                maxlength="500" 
                placeholder="расскажи как у тебя дела
                （＾ω＾）"
                {...props}
            ></textarea>
        </div>
    )
}