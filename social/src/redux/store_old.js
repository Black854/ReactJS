import karina from "../img/karina.jpg";
import ars from "../img/ars.jpg";
import sizh from "../img/sizh.jpg";
import sistr from "../img/sistr.jpg";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let rerenderEntireTree = () => {
    console.log('state changed');
}
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, postText: 'Hi bro', likesCount: 1},
                {id: 2, postText: 'How are you?', likesCount: 0},
                {id: 3, postText: 'Bro?', likesCount: 2}
            ],
            newPostText: ''
        },
    
        dialogsPage: {
            dialogs: [
                { id: '1', name: 'Карина', url: karina },
                { id: '2', name: 'Сижик', url: sizh },
                { id: '3', name: 'Арсик', url: ars },
                { id: '4', name: 'Систр', url : sistr },
            ],
            messages: [
                { id: 1, message: 'Hi', senderId: 1 },
                { id: 2, message: 'Helloo', senderId: 2 },
                { id: 3, message: 'How are you?', senderId: 1 },
                { id: 4, message: 'Helloo', senderId: 1 }
            ],
            newMessageText: ''
        },
    
        sidebar: {
            friends: [
                {id: 1, name: 'Карина', url: karina},
                {id: 2, name: 'Сижик', url: sizh},
                {id: 3, name: 'Арсик', url: ars}
            ]
        }
    },

    getState () {
        return this._state;
    },

    subscribe (observer) {
        rerenderEntireTree = observer;
    },

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        rerenderEntireTree(this.getState());
    },

    addPost () {
        
    },  
    
    sendMessage () {
        
    },
    
    updateNewPostText (text) {
        
    },
    
    updateNewMessageText (text) {
        
    }

}

export default store;
window.store = store;