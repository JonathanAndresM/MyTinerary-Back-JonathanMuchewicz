import { Router } from "express";
import { allUser, userById } from "../controllers/user/read.js";
import updateById from "../controllers/user/update.js";
import passport from "../middlewares/passport.js";
import validator from "../middlewares/validator.js";
import schemaUpdate from "../schemas/users/update.js";
import { deleteFindById } from "../controllers/user/delete.js";

const router = Router()

router.get("/all", passport.authenticate("jwt", { session: false }), allUser)
router.get("/user/:_id", passport.authenticate("jwt", { session: false }), userById)
router.patch("/update/:_id", passport.authenticate("jwt", { session: false }), validator(schemaUpdate), updateById)
router.delete("/delete/:_id", passport.authenticate("jwt", {session: false}), deleteFindById)

export default router