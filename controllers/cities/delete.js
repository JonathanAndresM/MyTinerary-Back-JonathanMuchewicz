import City from "../../models/City.js"

export const deleteFindById = async (req, res, next) => {
    try {
        let deleteCity = await City.findByIdAndDelete(req.params._id)
        if (deleteCity) {
            return res.status(200).json({
                response: deleteCity
            })
        }
    } catch (error) {
        next(error)
    }
}