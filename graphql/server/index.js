import express from "express";
import { ApolloServer } from "@apollo/server";
import bodyparser from "body-parser";
import cors from "cors"
import { expressMiddleware } from "@apollo/server/express4";
import axios from "axios";

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs: `
    type User {
      id: ID!
      name: String!
      email: String!
    }

    type Todo {
      id: ID!
      title: String!
      completed: Boolean
      user: User
    }
    
    type Query {
      getTodos: [Todo]
    }
    `,
    resolvers: {
      Todo: {
        user: async (todo) => {
          const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.userId}`);
          return data;
        }
      },
      Query: {
        getTodos: async () => {
          const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
          );
          return data;
        },
      },
    }
  });

  app.use(bodyparser.json());
  app.use(cors())
  
  await server.start();
  app.use("/graphql", expressMiddleware(server));

  app.listen(8000, () => {
    console.log("Server running on port 8000");
  })
}

startServer();