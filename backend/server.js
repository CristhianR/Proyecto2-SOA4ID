import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';

import User from './Models/user';
import News from './Models/news';

import typeDefs from './schema';
import resolvers from './resolvers';

mongoose.connect('mongodb://localhost:27017/users');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());


const schema = makeExecutableSchema({
    typeDefs, //Como van a lucir mis datos.
    resolvers // Métodos a usar 
})

// Creating an express server and a GraphQL endpoint

app.use('/graphql', express.json(), graphqlHTTP({
    schema: schema,
    context: {
        News,
        User
    },
    graphiql: true
}));

app.use('/', router);

app.get('/', (req, res) => res.send("Hello"));
app.listen(4000, () => console.log('Express server running on port 4000'));