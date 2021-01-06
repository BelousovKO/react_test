let state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Olga'},
            {id: 2, name: 'Polina'},
            {id: 3, name: 'Mihail'},
            {id: 4, name: 'Max'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Bi'},
            {id: 4, message: 'Wou'}
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCounts: 15},
            {id: 2, message: 'It"s my first post', likeCounts: 20},
            {id: 3, message: 'My name is Konstantin', likeCounts: 5},
        ]
    }
}

export default state;