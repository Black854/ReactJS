import karina from "../img/karina.jpg";
import ars from "../img/ars.jpg";
import sizh from "../img/sizh.jpg";
import sistr from "../img/sistr.jpg";

let initialState = {
    friends: [
        {id: 1, name: 'Карина', url: karina},
        {id: 2, name: 'Сижик', url: sizh},
        {id: 3, name: 'Арсик', url: ars},
        {id: 4, name: 'Систр', url: sistr}
    ]
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default sidebarReducer;