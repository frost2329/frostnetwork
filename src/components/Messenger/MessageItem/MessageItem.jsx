import classes from "../MessageItem/MessageItem.module.css";
import React from "react";

const MessageItem = (props) => {
    return (
        <div className={classes.messageItem}>
            <div  className={classes.messageItemAvtor}>
                <div>
                    <img src={props.avatar} className={classes.avatar}/>
                </div>
                <div>
                    <p>
                        {props.avtor}
                    </p>
                </div>
            </div>
            <div>
                {props.message}
            </div>
        </div>
    )
}
export default MessageItem;