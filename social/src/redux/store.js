import karina from "../img/karina.jpg";
import ars from "../img/ars.jpg";
import sizh from "../img/sizh.jpg";
import sistr from "../img/sistr.jpg";

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

    addPost () {
        let newPost = {
            id: 10,
            postText: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        rerenderEntireTree(this._state);
    },  
    
    sendMessage () {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText,
            senderId: 1
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        rerenderEntireTree(this.getState());
    },
    
    updateNewPostText (text) {
        this._state.profilePage.newPostText = text;
        rerenderEntireTree(this.getState());
    },
    
    updateNewMessageText (text) {
        this._state.dialogsPage.newMessageText = text;
        rerenderEntireTree(this.getState());
    },
    
    subscribe (observer) {
        rerenderEntireTree = observer;
    }


}


export default store;
window.store = store;