import profileReducer, { createNewPost } from "./profile-reducer";

it('new post should be added', () => {
    let state = {
        posts: [
            {id: 1, postText: 'Hi bro', likesCount: 1},
            {id: 2, postText: 'How are you?', likesCount: 0},
            {id: 3, postText: 'Bro?', likesCount: 2}
        ]
    }

    let action = createNewPost('hello');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(41);
})