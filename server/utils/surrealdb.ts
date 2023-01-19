import Surreal from "surrealdb.js";
import { config } from "dotenv";
config();

const {
  SURREAL_DB_URL: db_url,
  SURREAL_DB_USER: db_user,
  SURREAL_DB_PASSWORD: db_pass,
} = process.env;

const db = new Surreal(db_url);

export async function initDB() {
  try {
    console.log("Initializing DB");

    // * Checking if all the info is there
    if (!db_user || !db_pass || !db_url) {
      throw new Error("DB_USERNAME or DB_PASSWORD or DB_URL not set");
    }

    // * Authenticating the root user
    await db.signin({ user: db_user, pass: db_pass }).then((res) => {
      console.log("Signed into the DB", res);
    }).catch((err) => {
      console.log("Error signin into the DB", err);
    });

    // * Setting namespace to wp-projekat and database to store
    await db.use("wp-projekat", "store");
  } catch(err) {
    console.log(err);
  }
}

export async function registerUser(showName :String, username :String, password :String, eMail :String) {
  try {
    let record = await db.create('user:'+username, {
      show: showName,
      user: username,
      pass: password,
      email: eMail,
    });

    console.log("User " + username + " created");

    return { status: "OK", msg: "User created." };
  } catch(err) {
    console.log("User " + username + " failed to create");
    return { status: "ERROR", msg: "Failed to create." };
  }
}

export default db;