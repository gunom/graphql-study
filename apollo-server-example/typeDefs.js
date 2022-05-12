const {gql} = require('apollo-server')

const typeDefs = gql`
  type User {
    id: Int
    name: String
    age: Int
  }

  type Post {
    id: Int
    title: String
    contents: String
    user: User
  }

  type Query {
    posts: [Post]
  }
`;

module.exports = typeDefs