import express from 'express'
import { ApolloServer } from 'apollo-server-express';
import fs from 'fs';
import resolvers from './resolvers.js'
import { bodyParserGraphQL } from 'body-parser-graphql';

const typeDefs = fs.readFileSync("./schema.graphql", {
    encoding: "utf-8",
});


const port = 8080;
const app = express();

app.use(bodyParserGraphQL());

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground:true,
});
await server.start()
server.applyMiddleware({ 
    app, 
    path: '/graphql' 
});

app.listen(port,async ()=>{
    console.log(`server is ready`)
})