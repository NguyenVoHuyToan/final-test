import jwt from 'jsonwebtoken';
import { config } from "dotenv";

config();

export const signToken = ( payload ) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { username: payload.username, password: payload.password},
      process.env.PRIVATE_KEY,
      (err, token) => {
        if (err) {
          console.log("error", err);
        }
        resolve(token);
      }
    );
  });
};

export const verifyToken = (token, secretOrPublicKey ) => {
  return new Promise((resolve, reject) => {
    const checkToken =jwt.verify(token, secretOrPublicKey, (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });
};
