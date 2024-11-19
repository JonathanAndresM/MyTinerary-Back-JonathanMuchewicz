import { Router } from "express";
import signOut from "../controllers/auth/signOut.js";
import signIn from "../controllers/auth/signIn.js";
import signUp from "../controllers/auth/signUp.js";
import accountNotExists from "../middlewares/accountNotExists.js";
import isValidatePassword from "../middlewares/isValidatePassword.js";
import generateToken from "../middlewares/generateToken.js";
import passport from "../middlewares/passport.js";
import validator from "../middlewares/validator.js";
import accountExists from "../middlewares/accountExists.js";
import createhash from "../middlewares/createhash.js";
import schemaSignUp from "../schemas/users/signUp.js"

const router = Router()

router.post("/signIn", accountNotExists, isValidatePassword, generateToken, signIn)
router.post("/signOut", passport.authenticate("jwt", { session: false }), signOut)
router.post("/signUp", validator(schemaSignUp), accountExists, createhash, signUp)

export default router