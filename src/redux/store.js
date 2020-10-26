/*
import messengerReducer from "./messenger-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        Profile: {
            posts: [
                {
                    id: 1,
                    message: "HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык разметки веб-страниц во Всемирной паутине. Код HTML интерпретируется браузерами; полученный в результате интерпретации страница отображается на экране монитора компьютера или мобильного устройства." +
                        "Язык HTML до 5-й версии определялся как приложение SGML (стандартного обобщённого языка разметки по стандарту ISO 8879).",
                    likes: 34,
                    avatarUrl: "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"
                },
                {
                    id: 2,
                    message: "Привет, как дела?",
                    likes: 52,
                    avatarUrl: "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"
                }
            ],
            textNewPost: ""
        },

        Messenger: {
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
    },
    getState() {
        return this._state;
    },

    _renderTree() {
        console.log("Yo");
    },
    subscribe(func) {
        this._renderTree = func;
    },

    dispatch(action) {
        this._state.Profile = profileReducer(action, this._state.Profile);
        this._state.Messenger = messengerReducer(action, this._state.Messenger);
        this._renderTree(this._state);
    }
}


export default store;
*/
