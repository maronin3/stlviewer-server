import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import { Options } from "graphql-yoga";
import app from "./app";
import mongoose from 'mongoose';
import mongoConfig from './config/mongo';
import decodeJWT from "./utils/decodeJWT";

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";
const SUBSCRIPTION_ENDPOINT: string = "/subscription";

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT,
  subscriptions: {
    path: SUBSCRIPTION_ENDPOINT,
    onConnect: async connectionParams => {
      const token = connectionParams["X-JWT"];
      if (token) {
        const user = await decodeJWT(token);
        if (user) {
          return {
            currentUser: user
          };
        }
      }
      throw new Error("No JWT. Can't subscribe");
    }
  }
};

const handleAppStart = () => console.log(`Listening on port ${PORT}`);

mongoose.connect(mongoConfig.url, mongoConfig.configs)
  .then(() => {
    app.start(appOptions, handleAppStart);
  })
  .catch(error => console.log(error));

