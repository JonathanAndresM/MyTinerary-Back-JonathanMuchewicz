import Itinerary from "../../models/Itinerary.js";
import handleResponse from "../handleResponse.js"

export const create = async (req, res, next) => {
    try {
        let city = req.body
        let all = await Itinerary.create(city)
        handleResponse(res, all, 201)
    } catch (error) {
        next(error)
    }
}
