import { checkSchema } from "express-validator";
import { verifyToken } from "../jwt/jwt.js";
import databaseService from "../service/databaseService.js";
import { validator } from "../validator/validator.js";


export const registerValidator = validator(
  checkSchema(
    {
      email: {
        errorMessage: "Invalid email",
        isEmail: true,
        custom: {
          options: async (value, { req }) => {
            const isEmailExist = await databaseService.new_database.findOne({
              email: value,
            });
            if (isEmailExist) {
              throw new Error("Email already exist");
            }
            return true;
          },
        },
      },
      password: {
        isLength: {
          options: { min: 8 },
          errorMessage: "Password should be at least 8 chars",
        },
      },
      confirm_password: {
        isLength: {
          options: { min: 8 },
          errorMessage: "Confirm password should be at least 8 chars",
        },
        custom: {
          options: (value, { req }) => {
            if (value !== req.body.password) {
              throw new Error("Passwords do not match");
            }
            return true;
          },
        },
      },
    },
    ["body"]
  )
);

export const loginValidator =async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]
 console.log(token)
  const checkUser= await verifyToken(token,process.env.PRIVATE_KEY);
  console.log(checkUser)
  const result= await databaseService.user.find({username: checkUser.username});
  console.log(result)
  if(result){
    return next();
  }
  else{
    throw new Error("Access token is wrong")
  }
}

export const accessTokenValidator = validator(
  checkSchema(
    {
      Authorization: {
        custom: {
          options: async (value, { req }) => {
            if (!value) {
              throw new Error("Access token is required");
            }
            const access_token = value.split(" ")[1];
            const decode_authorization = await verifyToken({
              token: access_token,
              secretOrPublicKey: process.env.PRIVATE_KEY,
            });
            console.log(decode_authorization);
            req.decode_authorization = decode_authorization;
            return true;
          },
        },
      },
    },
    ["headers"]
  )
);

export const getProductValidator = validator(
  checkSchema(
    {
      Authorization: {
        custom: {
          options: async (value, { req }) => {
            if (!value) {
              throw new Error("Access token is required");
            }
            const access_token = value.split(" ")[1];
            const decode_authorization = await verifyToken({
              token: access_token,
              secretOrPublicKey: process.env.PRIVATE_KEY,
            });
            console.log(decode_authorization);
            req.decode_authorization = decode_authorization;
            return true;
          },
        },
      },
    },
  )
);
