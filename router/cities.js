import { Router } from "express";
import { allCities,cityById } from "../controllers/cities/read.js";

const router = Router()

router.get("/all", allCities)
router.get("/city/:_id",cityById)

export default router