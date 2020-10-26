const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_TEXT_NEW_POST = "UPDATE-TEXT-NEW-POST";

export const AddPostActionCreater = () => ({type:ADD_NEW_POST});
export const UpdateTextPostActionCreater = (message) => ({type:UPDATE_TEXT_NEW_POST, message: message });

let installState = {
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
}
const profileReducer = (state = installState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            let newPost = {
                id: 3,
                message: state.textNewPost,
                likes: 0,
                avatarUrl: "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"
            }
            return {
                ...state,
                textNewPost:"",
                posts: [...state.posts, newPost]
            }
        }
        case UPDATE_TEXT_NEW_POST: {
            return {
                ...state,
                textNewPost: action.message
            };
        }
        default: return state;

    }
}
export default profileReducer;