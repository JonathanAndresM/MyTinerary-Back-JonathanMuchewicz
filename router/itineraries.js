import { Router } from "express";
import { allItineraries, itineraryByCity, itineraryById } from "../controllers/itineraries/read.js";
import { deleteFindById } from "../controllers/itineraries/delete.js";
import { updateById } from "../controllers/itineraries/update.js";
import { create } from "../controllers/itineraries/create.js";

const router = Router()

router.get("/all", allItineraries)
router.get("/itinerary/:_id", itineraryById)
router.get("/city/:city", itineraryByCity)
router.post("/create", create)
router.delete("/delete/:_id", deleteFindById)
router.put("/update/:_id", updateById.update)

export default router