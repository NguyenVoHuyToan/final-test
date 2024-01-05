import { Router } from 'express';
import { loginController } from '../controller/userController.js';
import { loginValidator } from '../middleware/middleware.js';
import { getProductController, updateProductController } from '../controller/product.controller.js';

const userRoute = Router();

userRoute.get('/',getProductController)
userRoute.post('/',updateProductController)
userRoute.post('/login',loginController,loginValidator)

export default userRoute;