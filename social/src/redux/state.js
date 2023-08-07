import karina from "../img/karina.jpg";
import ars from "../img/ars.jpg";
import sizh from "../img/sizh.jpg";
import sistr from "../img/sistr.jpg";

let rerenderEntireTree = () => {
    console.log('state changed');
}

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 10,
        postText: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let sendMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText,
        senderId: 1
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
}

export let updateNewMessageText = (text) => {
    state.dialogsPage.newMessageText = text;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;
window.state = state;