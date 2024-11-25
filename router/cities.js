import { Router } from "express";
import { allCities, cityById } from "../controllers/cities/read.js";
import { create, createMany } from "../controllers/cities/create.js";
import { updateById } from "../controllers/cities/update.js";
import { deleteFindById } from "../controllers/cities/delete.js";
import passport from "../middlewares/passport.js";
import validator from "../middlewares/validator.js";
import citySchemaCreate from "../schemas/cities/create.js";
import citySchemaUpdate from "../schemas/cities/update.js";

const router = Router()

router.get("/all", passport.authenticate("jwt", {session: false}), allCities)
router.get("/city/:_id", passport.authenticate("jwt", {session: false}), cityById)
router.post("/create", validator(citySchemaCreate), passport.authenticate("jwt", {session: false}), create)
router.post("/createMany", validator(citySchemaCreate), passport.authenticate("jwt", {session: false}), createMany)
router.delete("/delete/:_id", passport.authenticate("jwt", {session: false}), deleteFindById)
router.put("/update/:_id", validator(citySchemaUpdate), passport.authenticate("jwt", {session: false}), updateById.update)

export default router