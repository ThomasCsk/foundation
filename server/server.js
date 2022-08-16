const path = require('path');
const express = require('express');
const {ApolloServer} = require('apollo-server-express');

const {authMiddleware} = require('../utils/auth.js');
const {typeDefs, resolvers} = require('../schemas');
const db = require('../config/connection.js');

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const startApolloServer = async () => {
  await server.start();

  server.applyMiddleware({app});

  if(process.env.NODE_ENV){
    app.use(express.static(path.join(__dirname, '../../client/build')));
  };

  app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Api server running on Port: ${PORT}`);
      console.log(`Use GraphQl at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startApolloServer(typeDefs, resolvers);