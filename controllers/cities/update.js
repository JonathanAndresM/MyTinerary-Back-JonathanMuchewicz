import City from "../../models/City.js";

export const updateById = {
    update: async (req, res, next) => {
        try {
            
            const updatedCity = await City.findByIdAndUpdate(
                req.params._id,
                req.body,
                { new: true, runValidators: true }
            );

            if (updatedCity) {
                return res.status(200).json({ response: updatedCity });
            } else {
                return res.status(404).json({ response: 'City not found' });
            }
        } catch (error) {
            next(error);
        }
    }
};
