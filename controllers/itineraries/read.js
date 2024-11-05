import Itinerary from "../../models/Itinerary.js";
import "../../models/City.js"
import findDocument from "../findDocument.js";
import handleResponse from "../handleResponse.js";

let allItineraries = async (req, res, next) => {
    return await findDocument(Itinerary, req, res, next)
}

let itineraryById = async (req, res, next) => {
    try {
        let id = req.params._id
        let all = await Itinerary.findById(id)
        handleResponse(res, all, 200)
    } catch (error) {
        next(error)
    }

}

let itineraryByCity = async (req, res, next) => {
    try {
        let cityId = req.params.city
        let all = await Itinerary.find({ city: cityId })
        handleResponse(res, all, 200)
    } catch (error) {
        next(error)
    }
}

export { allItineraries, itineraryById, itineraryByCity }