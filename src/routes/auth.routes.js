import { Router } from "express";
import { logoutUser, registerUser } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { userRegisterValidator } from "../validators/index.js";
import { login } from "../controllers/auth.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { verifyEmail } from "../controllers/auth.controllers.js";


const router = Router();

router.route('/register').post(userRegisterValidator(), validate, registerUser)
router.route('/login').post(userRegisterValidator(), validate, login)
router.route('/logout').post(verifyJWT, logoutUser)
router.route('/verifyEmail').post(verifyEmail)


export default router;
