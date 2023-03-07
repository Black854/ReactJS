import rerenderEntireTree from "../render";

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
            { id: '1', name: 'Карина', url: 'https://pps.whatsapp.net/v/t61.24694-24/97139888_286024802427555_4550301908471340101_n.jpg?ccb=11-4&oh=01_AdQm0j1TBSyWLxgKTL6Be8aRM9qcbANeYUnerjmTCjh3Yw&oe=640E9DA0' },
            { id: '2', name: 'Сижик', url: 'https://pps.whatsapp.net/v/t61.24694-24/118755745_3246721382032178_6297327615944445613_n.jpg?ccb=11-4&oh=01_AdQcpnMIhlVGkc2wBR_toV8gMhRlRCsEqzF9AYZOLCoMuQ&oe=640E9E00' },
            { id: '3', name: 'Арсик', url: 'https://pps.whatsapp.net/v/t61.24694-24/317746866_140043558909662_394026572113279997_n.jpg?ccb=11-4&oh=01_AdRdOh0yBYqEfDC1Z3MHxtrKU3JCneyXvi6ldBXhLDNr7g&oe=640E7CCD' },
            { id: '4', name: 'Систр', url : 'https://pps.whatsapp.net/v/t61.24694-24/241180503_1082641675933907_2489449898611948401_n.jpg?ccb=11-4&oh=01_AdQ0dm72ZOje9qLlN-Y3Njrhj_rB-kuKUPnDvA1Bv8k0zg&oe=640E8BD3' },
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
            {id: 1, name: 'Карина', url: 'https://pps.whatsapp.net/v/t61.24694-24/97139888_286024802427555_4550301908471340101_n.jpg?ccb=11-4&oh=01_AdQm0j1TBSyWLxgKTL6Be8aRM9qcbANeYUnerjmTCjh3Yw&oe=640E9DA0'},
            {id: 2, name: 'Сижик', url: 'https://pps.whatsapp.net/v/t61.24694-24/118755745_3246721382032178_6297327615944445613_n.jpg?ccb=11-4&oh=01_AdQcpnMIhlVGkc2wBR_toV8gMhRlRCsEqzF9AYZOLCoMuQ&oe=640E9E00'},
            {id: 3, name: 'Арсик', url: 'https://pps.whatsapp.net/v/t61.24694-24/317746866_140043558909662_394026572113279997_n.jpg?ccb=11-4&oh=01_AdRdOh0yBYqEfDC1Z3MHxtrKU3JCneyXvi6ldBXhLDNr7g&oe=640E7CCD'}
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

export default state;
window.state = state;