const DataLoader = require('dataloader');
const {users, posts} = require('./MockingDB')
const getUsers = (ids) => {
    return new Promise((res) => res(users.filter((user) => ids.includes(user.id))));
};

const batchGetUser = async (keys) => {
    const _users = await getUsers(keys);
    const usersMap = {};
    _users.forEach((user) => (usersMap[user.id] = user));
    return keys.map((id) => usersMap[id] || null);
};

const userLoader = new DataLoader(batchGetUser);

const resolvers = {
    Query: {
      posts: () => {
        return posts;
      },
    },
};

// const resolvers = {
//     Query:{   
//         posts: async () => {
//             //memory를 참조하므로 deepcopy
//             const copiedPosts = JSON.parse(JSON.stringify(posts)); 
//             const result = copiedPosts.map((post) => {
//                 post.user = userLoader.load(post.user);
//                 return post;
//             });
            
//             return result;
//         },
//     }
// }


module.exports = resolvers;