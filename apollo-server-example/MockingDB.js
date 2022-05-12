const users = [
    {
        id: 1,
        name: 'GunMo',
        age: 19,
    },
    {
        id: 2,
        name: 'Juyung',
        age: 20,
    },
    {
        id: 3,
        name: 'Nahee',
        age: 21,
    },
];
  
const posts = [
    {
        id: 1,
        title: 'test post title 1',
        contents: 'test content',
        user: 1,
    },
    {
        id: 2,
        title: 'test post title 2',
        contents: 'test content',
        user: 2,
    },
    {
        id: 3,
        title: 'test post title 3',
        contents: 'test content',
        user: 3,
    },
    {
        id: 4,
        titles: 'test post title 4',
        content: 'test content',
        user: 3,
    },
    {
        id: 5,
        title: 'test post title 5',
        contents: 'test content',
        user: 1,
    },
];

module.exports = {
    users,
    posts
}