import { ObjectId } from "mongodb";
import User from "../schema/schema.js";
import { signToken } from "../jwt/jwt.js";
import databaseService from "./databaseService.js";
import bcrypt from "bcrypt";
import {config} from "dotenv"

config();
class UserService {
  async register(payload) {
    const user_id = new ObjectId()
    await databaseService.user.insertOne(
      new User({
        ...payload,
        _id: user_id,
        password: bcrypt.hashSync(payload.password, +process.env.HASH_ROUND),
      })
    );
    const acess_token = await signToken({payload:user_id })
    return acess_token;
  }
  async login(userLogin) {
    const access_token = await signToken({payload:userLogin})
    return access_token;
}
}
const newUserService = new UserService();

export default newUserService;
