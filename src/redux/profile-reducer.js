const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: "1", text: "My First post", likes: "2" },
        { id: "2", text: "Coronavirus in Russia", likes: "8" },
        { id: "3", text: "Boss", likes: "15" },
        { id: "4", text: "JavaScript is best programming language", likes: "99" },
        { id: "5", text: "Huh uh", likes: "32" }
    ],
    textOnNewPost: ""
}

const profileReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_POST:{
            return {
                ...state,
                posts: [...state.posts, {id: "6",text: state.textOnNewPost, likes:"0"}],
                textOnNewPost : ""
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return{
                ...state,
                textOnNewPost: action.newText
            };
        }
        default:
            return state;       
    }
}

export const addPostActionCreator = () =>{
    return {
        type : ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) =>{
    return {
        type : UPDATE_NEW_POST_TEXT,
        newText : text
    }
}

export default profileReducer;