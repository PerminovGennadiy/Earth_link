// Посты на странице
let state = {

    // Данные для старницы messages
    messagesPage: {
        // Пользователи
        dialogsData: [
            { id: 1, name: 'Sergay', way:'https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png' },
            { id: 2, name: 'Anabolic', way: 'https://static.vecteezy.com/system/resources/thumbnails/006/487/912/small_2x/hacker-avatar-ilustration-free-vector.jpg' },
            { id: 3, name: 'Ivan', way: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg' },
            { id: 4, name: 'Andrew', way: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg' },
            { id: 5, name: 'Stasik$', way: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg' },
        ],

        // Сообщения
        messagesData: [
            { id: 1, message: 'Привет, как дела?' },
            { id: 2, message: 'Завтра свободен?' },
            { id: 3, message: 'У меня реально рак...' },
            { id: 4, message: 'My name is Anton' },
            { id: 5, message: 'I am a Thomas Shelby' },
        ],
    },

    // Данные для старницы profile
    profilePage: {
        // Пользователи
        posts: [
            { id: 1, message: 'Привет, как дела?', likes: '2' },
            { id: 2, message: 'Здравствуйте, меня зовут Сергей', likes: '1' },
            { id: 3, message: 'У меня рак:)', likes: '12' },
        ],
    },

    // Список друзей
    friendsList: {
        friends: [
            { id: 1, name: 'Sergay', way:'https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png' },
            { id: 2, name: 'Anabolic', way: 'https://static.vecteezy.com/system/resources/thumbnails/006/487/912/small_2x/hacker-avatar-ilustration-free-vector.jpg' },
            { id: 3, name: 'Ivan', way: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg' },
            { id: 4, name: 'Andrew', way: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg' },
            { id: 5, name: 'Stasik$', way: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg' },
        ],
    },
};

export default state;