import React from 'react';
import classes from './Messenger.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Messenger = (props) => {
    let elDialogs = props.Messenger.dialogs.map(d => (<DialogItem name={d.name} id={d.id}/>));
    let elMessages = props.Messenger.messages.map(m => (<MessageItem id={m.id} avtor={m.avtor} message={m.message} avatar={m.avatar}/>))

    let updateNewMessage = (event) => {
        props.updateNewMessage(event.target.value);
    }
    let addMessage = () => {
        props.addMessage();
    }
    return (
        <div className={classes.messenger}>
            <div className={classes.dialogs}>
                {elDialogs}
            </div>
            <div className={classes.masseges}>
                {elMessages}
                <textarea onChange={updateNewMessage} value={props.Messenger.textNewMessage} placeholder="Enter your message" /><br/>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Messenger;