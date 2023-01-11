import express, {Application, Request, Response} from 'express';
import {ApolloServer} from 'apollo-server-express';
import mongoose from 'mongoose';
import {types, resolvers} from './graphql';

const app: Application = express();
const port = 4000;

const mongoDbServer = 'mongodb+srv://ninja:KU1LTW1ZJwpQGlex@cluster0.wbmedqw.mongodb.net/?retryWrites=true&w=majority';


(async (expressApp) => {
  const apolloServer = new ApolloServer({typeDefs: types, resolvers});

  mongoose.connect(mongoDbServer, {}, () => {
    console.log('DB Connected!');

  })
  await apolloServer.start();
  apolloServer.applyMiddleware({app: expressApp});
  expressApp.listen(port, () => {
    console.log(`Server is running on ${port} port.`);
  })
})(app);
