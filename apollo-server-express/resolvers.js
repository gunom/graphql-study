import {users, posts} from "./MockingDB.js"
const resolvers = {
    Query: {
      posts: () => {
        return posts;
      },
    },
};

export default resolvers;