import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
//MongoMemoryServer dynamically creates a temporary MongoDB server on the fly,
//  and your tests can interact with it as if it were a real database server.

async function connect() {
  const mongod = await MongoMemoryServer.create();
  const getUri = mongod.getUri();

  const db = await mongoose.connect(getUri);
  console.log("Database Connected");
  return db;
}

export default connect;
