import React from 'react';
import Messenger from "./Messenger";
import {AddMessageActionCreater, UpdateTextMessageActionCreater} from "../../redux/messenger-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        Messenger: state.Messenger
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage() {
            dispatch(AddMessageActionCreater());
        },
        updateNewMessage(message) {
            dispatch(UpdateTextMessageActionCreater(message));
        }
    }


}
const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(Messenger);

export default MessengerContainer;