let state = {
    profilePage: {
        posts: [
            {id: 1, postText: 'Hi bro', likesCount: 1},
            {id: 2, postText: 'How are you?', likesCount: 0},
            {id: 3, postText: 'Bro?', likesCount: 2}
        ]
    },

    dialogsPage: {
        dialogs: [
            { id: '1', name: 'Карина', url: 'https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=360' },
            { id: '2', name: 'Сижик', url: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' },
            { id: '3', name: 'Арсик', url: 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png' },
            { id: '4', name: 'Систр', url : 'https://png.pngtree.com/png-clipart/20200819/ourmid/pngtree-female-avatar-profile-png-image_2326119.jpg' },
        ],
        messages: [
            { id: 1, message: 'Hi', senderId: '1' },
            { id: 2, message: 'Helloo', senderId: '2' },
            { id: 3, message: 'How are you?', senderId: '1' },
            { id: 4, message: 'Helloo', senderId: '1' }
        ]
    },

    sidebar: {
        friends: [
            {id: 1, name: 'Карина', url: 'https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=360'},
            {id: 2, name: 'Сижик', url: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png'},
            {id: 2, name: 'Арсик', url: 'https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg'}
        ]
    }
}

export default state;