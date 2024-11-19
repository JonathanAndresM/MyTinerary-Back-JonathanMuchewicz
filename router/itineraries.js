import { Router } from "express";
import { allItineraries, itineraryByCity, itineraryById } from "../controllers/itineraries/read.js";
import { deleteFindById } from "../controllers/itineraries/delete.js";
import { updateById } from "../controllers/itineraries/update.js";
import { create } from "../controllers/itineraries/create.js";
import passport from "../middlewares/passport.js";

const router = Router()

router.get("/all", passport.authenticate("jwt", {session: false}), allItineraries)
router.get("/itinerary/:_id", passport.authenticate("jwt", {session: false}), itineraryById)
router.get("/city/:city", passport.authenticate("jwt", {session: false}), itineraryByCity)
router.post("/create", passport.authenticate("jwt", {session: false}), create)
router.delete("/delete/:_id", passport.authenticate("jwt", {session: false}), deleteFindById)
router.put("/update/:_id", passport.authenticate("jwt", {session: false}), updateById.update)

export default router