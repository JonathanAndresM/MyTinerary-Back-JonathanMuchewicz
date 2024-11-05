import Itinerary from "../../models/Itinerary.js"

export const deleteFindById = async (req, res, next) => {
    try {
        let deleteItinerary = await Itinerary.findByIdAndDelete(req.params._id)
        if (deleteItinerary) {
            return res.status(200).json({
                response: deleteItinerary
            })
        }
    } catch (error) {
        next(error)
    }
}