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
import validateToken from "../controllers/auth/validateToken.js";
import passportGoogle from "../middlewares/passportGoogle.js";
import signInGoogle from "../controllers/auth/signInGoogle.js";

const router = Router()

router.post("/signIn", accountNotExists, isValidatePassword, generateToken, signIn)
router.post("/signOut", passport.authenticate("jwt", { session: false }), signOut)
router.post("/signUp", validator(schemaSignUp), accountExists, createhash, signUp)
router.get("/validateToken", passport.authenticate("jwt", { session: false }), validateToken)
router.get("/signin/google", passportGoogle.authenticate("google", { scope: ["profile", "email"], session: false }))
router.get("/signin/google/callback", passportGoogle.authenticate("google", {session: false, failureRedirect: "/sign-in"}), generateToken, signInGoogle)

export default router