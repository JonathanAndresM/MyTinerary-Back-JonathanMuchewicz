import City from "../../models/City.js";
import Itinerary from "../../models/Itinerary.js";
import handleResponse from "../handleResponse.js"

let allCities = async (req, res, next) => {
    try {
        let all = await City.find().populate({
            path: "itineraries",
            select: "_id"
        })
        handleResponse(res, all, 200)
    } catch (error) {
        next(error)
    }
}

let cityById = async (req, res, next) => {
    try {
        let id = req.params._id
        let all = await City.findById(id)
        let itineraries = await Itinerary.find({ city: id })
        res.status(200).json({
            response: {
                ...all.toObject(),
                itineraries
            }
        })
    } catch (error) {
        next(error)
    }

}

export { allCities, cityById }