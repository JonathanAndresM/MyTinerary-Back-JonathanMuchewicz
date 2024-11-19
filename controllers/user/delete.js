import User from "../../models/User.js"
import handleResponse from "../handleResponse.js"

export const deleteFindById = async (req, res, next) => {
    try {
        let deleteUser = await User.findByIdAndDelete(req.params._id)
        if (deleteUser) {
            handleResponse(res, deleteUser, 200)
        }
    } catch (error) {
        next(error)
    }
}