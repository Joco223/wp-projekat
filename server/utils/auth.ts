import { config } from "dotenv";
const jwt = require('jsonwebtoken');

config();

const {
  JWT_KEY: jwt_key,
} = process.env;

export function checkKey(token: String) {
  if (token != "") {
    const verified = jwt.verify(token, jwt_key) as any;

    if (verified) {
      return { status: "OK" };
    }else{
      return { status: "ERROR" };
    }
  } else {
    return { status: "ERROR" };
  }
}