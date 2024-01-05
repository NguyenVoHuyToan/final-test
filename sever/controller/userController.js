import databaseService from "../service/databaseService.js";
import newUserService from "../service/userService.js";

export const registerController = async (req, res, next) => {
    const access_token = await newUserService.register(req.body);
    return res.json({
      message: "Registration successfully registered",
      result: access_token,
    });
  };

 export const loginController = async (req, res, next) => {
    const userLogin = await databaseService.user.find({username: req.body.username}).toArray();
    console.log(userLogin);
    const access_token = await newUserService.login(userLogin);
    return res.json({
      message: "Login successfully",
      result: access_token,
    });
  };