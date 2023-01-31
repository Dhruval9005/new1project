require("dotenv").config();
const mongoose = require("mongoose");
const db_url = require("../config/keys").database_url;
const { magenta, yellow, red } = require("../utils/consoleColor");

const connectDB = async () => {
  try {
    // Connect to MongoDB
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Helper function
    await displayDbStatus(conn);
  } catch (error) {
    console.log(red, `Mongoose Error`);
    console.log(error);
    return null;
  }
};

const displayDbStatus = async (conn) => {
  // display host & port of mongo db
  console.log(
    magenta,
    `✓ MongoDB Connected: ${conn.connection.host}:${conn.connection.port} -> [${conn.connection.name}]`
  );

  // display list of collection
  const listCollections = await conn.connection.db.listCollections();
  listCollections.toArray((err, list) => {
    if (err) {
      console.log(err);
    } else {
      list.forEach((collection) => {
        console.log(yellow, `  --> ${collection.name}`);
      });
    }
  });
};
module.exports = connectDB;
