const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_TEXT_NEW_MESSAGE = "UPDATE-TEXT-NEW-MESSAGE";

export const AddMessageActionCreater = () => ({type:ADD_NEW_MESSAGE});
export const UpdateTextMessageActionCreater = (message) => ({type:UPDATE_TEXT_NEW_MESSAGE, message: message });

let installState = {
    dialogs: [
        {id: 1, name: "Marina"},
        {id: 2, name: "Anton"},
        {id: 3, name: "Dmitriy"},
        {id: 4, name: "Denis"}
    ],
    messages: [
        {
            id: 1,
            avtor: "Denis",
            avatar: "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",
            message: "Привет, Марина! Как дела?"
        },
        {
            id: 2,
            avtor: "Marina",
            avatar: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg",
            message: "Привет, отлично! А у тебя?"
        },
        {
            id: 3,
            avtor: "Denis",
            avatar: "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",
            message: "Норм. Что делаешь сегодня?"
        },
        {
            id: 4,
            avtor: "Marina",
            avatar: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg",
            message: "Учу уроки, завтра в школу"
        },
    ],
    textNewMessage: ""
}

const messengerReducer = (state = installState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            let newMessage = {
                id: 5,
                avtor: "Denis",
                avatar: "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",
                message: state.textNewMessage
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                textNewMessage:""
            };
        }
        case UPDATE_TEXT_NEW_MESSAGE: {
            return {
                ...state,
                textNewMessage:action.message
            };
        }
        default: return state;

    }
}
export default messengerReducer
