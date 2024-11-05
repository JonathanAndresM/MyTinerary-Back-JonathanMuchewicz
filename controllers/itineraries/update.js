import Itinerary from "../../models/Itinerary.js";

export const updateById = {
    update: async (req, res, next) => {
        try {
            const updatedItinerary = await Itinerary.findByIdAndUpdate(
                req.params._id,
                req.body,
                { new: true, runValidators: true }
            );

            if (updatedItinerary) {
                return res.status(200).json({ response: updatedItinerary });
            } else {
                return res.status(404).json({ response: 'Itinerary not found' });
            }
        } catch (error) {
            next(error);
        }
    }
};
