import { Router } from "express";
import { allCities, cityById } from "../controllers/cities/read.js";
import { create, createMany } from "../controllers/cities/create.js";
import { updateById } from "../controllers/cities/update.js";
import { deleteFindById } from "../controllers/cities/delete.js";

const router = Router()

router.get("/all", allCities)
router.get("/city/:_id", cityById)
router.post("/create", create)
router.post("/createMany", createMany)
router.delete("/delete/:_id", deleteFindById)
router.put("/update/:_id", updateById.update)

export default router